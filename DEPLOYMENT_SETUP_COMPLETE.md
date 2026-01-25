# ✅ GitHub Actions Deployment Setup - Complete

## Repository Configuration
- **Repository:** Subrat053/MegaInfoTech-it-consulting
- **Branch:** main
- **Project:** MegaInfoTech Consulting React App
- **Deployment Target:** Hostinger VPS

---

## 📁 Files Created/Updated

### Workflow Files
✅ `.github/workflows/deploy-to-hostinger.yml` - Main deployment workflow
   - Triggers on push to `main` branch only
   - Builds React app with production env vars
   - Uploads build to VPS via SCP
   - Deploys with backup/rollback capability
   - Auto-restarts Nginx or PM2

✅ `.github/workflows/build-only.yml` - CI workflow
   - Tests builds on PR and develop branch
   - No deployment (validation only)

### Documentation
✅ `DEPLOYMENT_GUIDE.md` - Comprehensive guide
   - Step-by-step SSH key setup
   - GitHub Secrets configuration
   - Server environment setup (Nginx + PM2)
   - SSL/HTTPS with Let's Encrypt
   - Troubleshooting guide

✅ `QUICK_DEPLOY.md` - Quick reference card
   - 5-minute setup summary
   - Useful VPS commands
   - Troubleshooting quick fixes
   - Security checklist

### Scripts
✅ `scripts/vps-setup.sh` - One-command VPS initialization
   - Installs Node.js, Nginx, PM2
   - Creates deployment directory: `/var/www/MegaInfoTech-it-consulting`
   - Configures Nginx: `/etc/nginx/sites-available/MegaInfoTech-it-consulting`
   - Sets up status monitoring command: `megainfotech-it-consulting-status`
   - PM2 app name: `MegaInfoTech-it-consulting`

---

## 🔧 GitHub Secrets Required

Add these 5 secrets to your repository settings:

| Secret Name | Example Value |
|-------------|---------------|
| `VPS_HOST` | `192.168.1.100` or `yourdomain.com` |
| `VPS_PORT` | `22` |
| `VPS_USERNAME` | `root` |
| `VPS_SSH_KEY` | *(contents of ~/.ssh/hostinger_deploy)* |
| `VPS_DEPLOY_PATH` | `/var/www/MegaInfoTech-it-consulting` |

---

## 🚀 Quick Start

### 1. Generate SSH Key
```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/hostinger_deploy -C "github-actions"
```

### 2. Add Public Key to VPS
```bash
ssh root@YOUR_VPS_IP
mkdir -p ~/.ssh
cat >> ~/.ssh/authorized_keys << 'EOF'
[PASTE CONTENTS OF hostinger_deploy.pub]
EOF
chmod 600 ~/.ssh/authorized_keys
```

### 3. Setup VPS
```bash
curl -O https://raw.githubusercontent.com/Subrat053/MegaInfoTech-it-consulting/main/scripts/vps-setup.sh
chmod +x vps-setup.sh
sudo ./vps-setup.sh
```

### 4. Add GitHub Secrets
Go to: **GitHub Repo → Settings → Secrets and variables → Actions**

### 5. Deploy
```bash
git add .
git commit -m "Initial deployment setup"
git push origin main
```

---

## 🎯 Deployment Flow

```
git push to main
    ↓
GitHub Actions Workflow Starts
    ↓
Install Dependencies
    ↓
Build React App
    ↓
Upload Build to VPS (via SCP)
    ↓
Create Backup of Old Build
    ↓
Deploy New Build to /var/www/megainfo-consulting
    ↓
Restart Nginx
    ↓
✅ Live! (typically < 2 minutes)
```

---

## ✨ Features

✅ **Automatic Deployments** - Every push to `main` deploys automatically
✅ **Zero-Downtime Deploys** - Backup old build before deploying new
✅ **Rollback Capability** - Keep last 3 backups for quick rollback
✅ **Build Logs** - View workflow logs in GitHub Actions
✅ **Secure** - SSH keys stored in GitHub Secrets
✅ **Production Ready** - Nginx caching, gzip compression, security headers
✅ **One-Command Setup** - VPS setup script handles everything

---

## 📊 Monitor Deployments

### GitHub Actions
- View workflow logs: https://github.com/Subrat053/MegaInfoTech-it-consulting/actions
- Check deployment status in real-time
- View build logs and errors

### VPS
```bash
# Check server status
megainfotech-it-consulting-status

# View recent deployments
ls -la /var/www/MegaInfoTech-it-consulting/

# Check web server
sudo systemctl status nginx
```

---

## 🔐 Security

- SSH key only for automated deployments (no manual access needed)
- Credentials stored securely in GitHub Secrets
- VPS firewall should restrict to necessary ports (22, 80, 443)
- Nginx security headers configured
- HTTPS/SSL recommended via Let's Encrypt

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| SSH permission denied | `chmod 600 ~/.ssh/hostinger_deploy` |
| Deployment fails | Check GitHub Actions logs for error details |
| Old build still showing | `sudo systemctl restart nginx` on VPS |
| Nginx 403 forbidden | `sudo chown -R www-data:www-data /var/www/megainfo-consulting` |
| VPS out of space | Check `/var/www/megainfo-consulting/` size |

---

## 📞 Support

- GitHub Actions: https://docs.github.com/en/actions
- Nginx: https://nginx.org/en/docs/
- React Deployment: https://create-react-app.dev/deployment
- Hostinger Support: https://www.hostinger.com/support

---

## ✅ Checklist

- [ ] SSH key generated locally
- [ ] Public key added to VPS
- [ ] VPS setup script executed
- [ ] 5 GitHub Secrets added
- [ ] Test deployment (push to main)
- [ ] Verify app is live on domain
- [ ] Monitor logs for any issues
- [ ] Setup HTTPS with Let's Encrypt (optional)

---

**Status:** ✅ Ready for deployment!  
**Repository:** Subrat053/MegaInfoTech-it-consulting  
**Branch:** main  
**Date:** January 25, 2026

Push to main, and your app will deploy automatically to your Hostinger VPS! 🚀
