#!/bin/bash

# VPS Setup Script for MegaInfoTech Consulting React App
# Run this on your Hostinger VPS to prepare it for automated deployments

set -e

echo "🚀 Starting MegaInfoTech Consulting VPS Setup..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
  echo -e "${YELLOW}⚠️  This script should be run as root (use sudo)${NC}"
  exit 1
fi

# Update system packages
echo -e "${BLUE}📦 Updating system packages...${NC}"
apt update && apt upgrade -y

# Install Node.js (LTS)
echo -e "${BLUE}📦 Installing Node.js...${NC}"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install Nginx
echo -e "${BLUE}📦 Installing Nginx...${NC}"
apt install -y nginx

# Create deployment directory
DEPLOY_PATH="/var/www/megainfo-consulting"
echo -e "${BLUE}📁 Creating deployment directory: $DEPLOY_PATH${NC}"
mkdir -p $DEPLOY_PATH
chown -R www-data:www-data $DEPLOY_PATH
chmod -R 755 $DEPLOY_PATH

# Install PM2 (optional, for process management)
echo -e "${BLUE}📦 Installing PM2...${NC}"
npm install -g pm2
pm2 completion install

# Create a simple Nginx configuration
echo -e "${BLUE}⚙️  Configuring Nginx...${NC}"
cat > /etc/nginx/sites-available/MegaInfoTech-it-consulting << 'EOF'
server {
    listen 80;
    listen [::]:80;
    
    server_name _;
    
    root /var/www/MegaInfoTech-it-consulting;
    index index.html;
    
    # React Router fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static files
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/javascript application/json application/javascript application/xml+rss;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF

# Enable the Nginx site
ln -sf /etc/nginx/sites-available/MegaInfoTech-it-consulting /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test and reload Nginx
echo -e "${BLUE}✅ Testing Nginx configuration...${NC}"
nginx -t
systemctl restart nginx
systemctl enable nginx

# Setup SSH directory for deployments
echo -e "${BLUE}🔑 Setting up SSH...${NC}"
mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Create deployment hooks directory
mkdir -p $DEPLOY_PATH/scripts
cat > $DEPLOY_PATH/scripts/post-deploy.sh << 'EOF'
#!/bin/bash
# Post-deployment script
cd /var/www/MegaInfoTech-it-consulting
echo "✅ Deployment completed: $(date)" >> /var/log/MegaInfoTech-it-consulting-deploy.log
EOF

chmod +x $DEPLOY_PATH/scripts/post-deploy.sh

# Create a status check script
cat > /usr/local/bin/megainfotech-it-consulting-status << 'EOF'
#!/bin/bash
echo "=== MegaInfoTech-it-consulting Status ==="
echo ""
echo "📊 Nginx Status:"
systemctl status nginx --no-pager
echo ""
echo "📂 Deployment Directory:"
ls -lah /var/www/MegaInfoTech-it-consulting/ | head -10
echo ""
echo "🌐 Server Access:"
echo "Visit: http://$(hostname -I | awk '{print $1}')"
EOF

chmod +x /usr/local/bin/megainfotech-it-consulting-status

echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "1. Add your SSH public key to ~/.ssh/authorized_keys"
echo "2. Set GitHub Secrets in your repository:"
echo "   - VPS_HOST: $(hostname -I | awk '{print $1}')"
echo "   - VPS_PORT: 22"
echo "   - VPS_USERNAME: root (or your username)"
echo "   - VPS_SSH_KEY: (contents of your private key)"
echo "   - VPS_DEPLOY_PATH: $DEPLOY_PATH"
echo ""
echo "3. Update your domain in Nginx config:"
echo "   - Edit: /etc/nginx/sites-available/MegaInfoTech-it-consulting"
echo "   - Set: server_name your-domain.com www.your-domain.com;"
echo "   - Restart: systemctl restart nginx"
echo ""
echo "4. (Optional) Setup SSL with Let's Encrypt:"
echo "   apt install certbot python3-certbot-nginx -y"
echo "   certbot --nginx -d your-domain.com"
echo ""
echo -e "${YELLOW}To check server status, run:${NC}"
echo "megainfotech-it-consulting-status"
echo ""
