# GitHub Actions Deployment Guide for Hostinger VPS

## Overview
This guide shows how to set up automated deployment of the MegaInfoTech consulting React app to Hostinger VPS using GitHub Actions. The app deploys automatically whenever you push to the `main` branch of the `Subrat053/MegaInfoTech-it-consulting` repository.

## Prerequisites

1. **GitHub Repository** - Your code is already in a GitHub repo
2. **Hostinger VPS Account** - Active VPS with SSH access
3. **SSH Key Pair** - For VPS authentication
4. **Domain/DNS** - Pointing to your VPS IP

---

## Step 1: Generate SSH Key for GitHub Actions

Generate a new SSH key pair (if you don't have one):

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/hostinger_deploy -C "github-actions"
```

This creates:
- `~/.ssh/hostinger_deploy` (private key)
- `~/.ssh/hostinger_deploy.pub` (public key)

---

## Step 2: Add Public Key to Hostinger VPS

1. SSH into your VPS:
```bash
ssh root@your-vps-ip
```

2. Create `.ssh` directory if it doesn't exist:
```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

3. Add the public key to `authorized_keys`:
```bash
cat >> ~/.ssh/authorized_keys << 'EOF'
<paste-contents-of-hostinger_deploy.pub>
EOF
```

4. Set proper permissions:
```bash
chmod 600 ~/.ssh/authorized_keys
```

---

## Step 3: Set GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings → Secrets and variables → Actions**
3. Add the following secrets:

| Secret Name | Value | Example |
|-------------|-------|---------|
| `VPS_HOST` | Your VPS IP address | `192.168.1.100` |
| `VPS_PORT` | SSH port (usually 22) | `22` |
| `VPS_USERNAME` | SSH username | `root` or `ubuntu` |
| `VPS_SSH_KEY` | Private key contents | (paste entire `hostinger_deploy` file) |
| `VPS_DEPLOY_PATH` | Deploy directory path | `/home/www-data/digital-agency` |

**To copy the private key to GitHub secrets:**
```bash
cat ~/.ssh/hostinger_deploy | xclip -selection clipboard
```
Or on macOS:
```bash
cat ~/.ssh/hostinger_deploy | pbcopy
```
Or Windows PowerShell:
```powershell
Get-Content ~/.ssh/hostinger_deploy | Set-Clipboard
```

---

## Step 4: Set Up Server Environment

### Option A: Using PM2 (Node.js Process Manager)

1. Install PM2 on VPS:
```bash
npm install -g pm2
```

2. Create deployment directory:
```bash
mkdir -p /home/www-data/MegaInfoTech-it-consulting
cd /home/www-data/MegaInfoTech-it-consulting
```

3. Create `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [{
    name: 'MegaInfoTech-it-consulting',
    script: 'npx',
    args: 'serve -s build -l 3000',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

4. Start the app:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Option B: Using Nginx + Static Files (Recommended)

1. Install Nginx:
```bash
sudo apt update
sudo apt install nginx -y
```

2. Create deployment directory:
```bash
mkdir -p /var/www/MegaInfoTech-it-consulting
```

3. Update GitHub secret `VPS_DEPLOY_PATH` to `/var/www/MegaInfoTech-it-consulting`

4. Create Nginx config at `/etc/nginx/sites-available/MegaInfoTech-it-consulting`:
```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/megainfo-consulting;
    index index.html;
    
    # React Router fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static files
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/json application/javascript;
}
```

5. Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/MegaInfoTech-it-consulting /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

6. (Optional) Set up SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

---

## Step 5: Test the Workflow

1. Make a test commit and push to `main`:
```bash
echo "# Test deployment" >> README.md
git add README.md
git commit -m "test: trigger deployment"
git push origin main
```

2. Go to your GitHub repository → **Actions** tab
3. Watch the workflow execute
4. Check deployment status in real-time

---

## Step 6: Monitor Deployments

### GitHub Actions Dashboard
- View workflow logs at: `https://github.com/Subrat053/MegaInfoTech-it-consulting/actions`

### VPS Verification
```bash
# Check if build was deployed
ls -la /var/www/MegaInfoTech-it-consulting/build/

# Check Nginx status
sudo systemctl status nginx

# Check PM2 (if using PM2)
pm2 status
pm2 logs MegaInfoTech-it-consulting

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

---

## Troubleshooting

### "SSH key permission denied"
```bash
chmod 600 ~/.ssh/hostinger_deploy
```

### "Permission denied" on VPS
Ensure `VPS_USERNAME` has write access to `VPS_DEPLOY_PATH`:
```bash
sudo chown -R username:username /var/www/MegaInfoTech-it-consulting
```

### Build fails with "out of memory"
Increase Node.js memory in the workflow:
```yaml
env:
  NODE_OPTIONS: --max-old-space-size=4096
```

### Nginx not serving latest build
```bash
sudo systemctl restart nginx
```

### PM2 app not restarting
```bash
pm2 reload MegaInfoTech-it-consulting
pm2 save
```

---

## Automation Features

✅ **Automatic builds** on every push to `main`  
✅ **Zero-downtime deployments** (backup + swap strategy)  
✅ **Rollback capability** (previous build saved as backup)  
✅ **Deployment logs** visible in GitHub Actions  
✅ **Email notifications** (optional, via GitHub)  

---

## Environment Variables

If your React app needs environment variables, add them in multiple places:

1. **GitHub Repository Secrets** (for build-time):
```yaml
env:
  REACT_APP_API_URL: ${{ secrets.REACT_APP_API_URL }}
```

2. **On VPS** (for runtime, if using PM2):
```bash
pm2 env set REACT_APP_API_URL=https://api.example.com
```

3. **.env file** in deployment directory:
```bash
echo "REACT_APP_API_URL=https://api.example.com" > /var/www/digital-agency/.env
```

---

## Advanced: Conditional Deployments

Deploy only on tagged releases:

```yaml
on:
  push:
    tags:
      - 'v*'  # v1.0.0, v2.0.0, etc.
```

---

## Next Steps

1. ✅ Push this guide and workflow to your repository
2. ✅ Set up GitHub Secrets with your VPS details
3. ✅ Configure server environment (Nginx or PM2)
4. ✅ Make a test push and verify deployment
5. ✅ Monitor logs and set up alerts

Your React app will now deploy automatically every time you push to `main`! 🚀
