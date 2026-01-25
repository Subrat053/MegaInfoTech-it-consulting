# ✅ CI/CD Setup Customized for MegaInfoTech-it-consulting

## Repository
- **Owner:** Subrat053
- **Repository Name:** MegaInfoTech-it-consulting
- **Branch:** main
- **Full Name Used:** `MegaInfoTech-it-consulting` (no abbreviations)

---

## 📋 Naming Convention Applied Throughout

### File Paths & Directories
- **VPS Deployment Path:** `/var/www/MegaInfoTech-it-consulting`
- **Nginx Config:** `/etc/nginx/sites-available/MegaInfoTech-it-consulting`
- **Nginx Enabled:** `/etc/nginx/sites-enabled/MegaInfoTech-it-consulting`
- **Nginx Document Root:** `/var/www/MegaInfoTech-it-consulting`

### Process & Application Names
- **PM2 App Name:** `MegaInfoTech-it-consulting`
- **Status Command:** `megainfotech-it-consulting-status`
- **Log File:** `/var/log/MegaInfoTech-it-consulting-deploy.log`

### GitHub Secrets
```
VPS_DEPLOY_PATH = /var/www/MegaInfoTech-it-consulting
```

---

## 🔧 Files Updated

### 1. `.github/workflows/deploy-to-hostinger.yml`
- ✅ PM2 app restart uses `MegaInfoTech-it-consulting`
- ✅ Triggers only on push to `main`
- ✅ Builds with production env vars
- ✅ Zero-downtime deployment with backups

### 2. `DEPLOYMENT_GUIDE.md`
- ✅ All paths reference `/var/www/MegaInfoTech-it-consulting`
- ✅ Nginx config references `MegaInfoTech-it-consulting`
- ✅ PM2 app name is `MegaInfoTech-it-consulting`
- ✅ Verification commands updated

### 3. `QUICK_DEPLOY.md`
- ✅ Deployment path: `/var/www/MegaInfoTech-it-consulting`
- ✅ GitHub secret path updated
- ✅ Status command: `megainfotech-it-consulting-status`
- ✅ Troubleshooting paths updated
- ✅ Useful commands reference correct paths

### 4. `scripts/vps-setup.sh`
- ✅ Creates: `/var/www/MegaInfoTech-it-consulting`
- ✅ Nginx config: `/etc/nginx/sites-available/MegaInfoTech-it-consulting`
- ✅ Nginx enabled: `/etc/nginx/sites-enabled/MegaInfoTech-it-consulting`
- ✅ Post-deploy logs to: `/var/log/MegaInfoTech-it-consulting-deploy.log`
- ✅ Status command: `megainfotech-it-consulting-status`
- ✅ Next steps reference correct paths

### 5. `DEPLOYMENT_SETUP_COMPLETE.md`
- ✅ All references use `MegaInfoTech-it-consulting`
- ✅ Paths and command names updated

---

## 🚀 Quick Commands Reference

### Generate SSH Key
```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/hostinger_deploy -C "github-actions"
```

### Setup VPS
```bash
curl -O https://raw.githubusercontent.com/Subrat053/MegaInfoTech-it-consulting/main/scripts/vps-setup.sh
chmod +x vps-setup.sh
sudo ./vps-setup.sh
```

### Check Deployment Status
```bash
megainfotech-it-consulting-status
```

### Restart Services
```bash
sudo systemctl restart nginx
pm2 restart MegaInfoTech-it-consulting
```

### View Logs
```bash
tail -f /var/log/MegaInfoTech-it-consulting-deploy.log
pm2 logs MegaInfoTech-it-consulting
```

### Check Deployment Directory
```bash
ls -la /var/www/MegaInfoTech-it-consulting/
```

---

## 📝 GitHub Secrets Required

Add exactly 5 secrets to your repository:

| Name | Value |
|------|-------|
| `VPS_HOST` | Your VPS IP or domain |
| `VPS_PORT` | 22 |
| `VPS_USERNAME` | root |
| `VPS_SSH_KEY` | Contents of ~/.ssh/hostinger_deploy |
| `VPS_DEPLOY_PATH` | `/var/www/MegaInfoTech-it-consulting` |

---

## ✨ Complete Setup

All files are now consistent with your GitHub repository name:
- ✅ No abbreviations used
- ✅ Full name `MegaInfoTech-it-consulting` throughout
- ✅ Easy to identify and manage
- ✅ Consistent across all documentation
- ✅ Consistent across all scripts

Simply push to `main` and your app will deploy automatically! 🎉

---

**Status:** ✅ Ready to Deploy  
**Repository:** Subrat053/MegaInfoTech-it-consulting  
**Last Updated:** January 25, 2026
