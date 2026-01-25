# Quick Deployment Reference - MegaInfoTech Consulting

## 🚀 5-Minute Setup

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

### 3. Setup VPS (Run this on Hostinger VPS)
```bash
# Download and run setup script
curl -O https://raw.githubusercontent.com/Subrat053/MegaInfoTech-it-consulting/main/scripts/vps-setup.sh
chmod +x vps-setup.sh
sudo ./vps-setup.sh
```

### 4. Add GitHub Secrets
Go to: **GitHub Repo → Settings → Secrets and variables → Actions**

Add these 5 secrets:
```
VPS_HOST           = your-vps-ip-or-domain
VPS_PORT           = 22
VPS_USERNAME       = root
VPS_SSH_KEY        = [contents of ~/.ssh/hostinger_deploy]
VPS_DEPLOY_PATH    = /var/www/MegaInfoTech-it-consulting
```

### 5. Deploy!
```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

✅ GitHub Actions will automatically:
- Build your React app
- Upload to VPS
- Restart the web server
- Create backups

---

## 📊 Workflow Status

Check deployment progress: **GitHub Repo → Actions tab**

---

## 🔧 Useful Commands on VPS

```bash
# Check deployment status
megainfotech-it-consulting-status

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Restart services
sudo systemctl restart nginx
pm2 restart MegaInfoTech-it-consulting  # if using PM2

# View deployment logs
cat /var/log/MegaInfoTech-it-consulting-deploy.log

# Check disk space
df -h /var/www/MegaInfoTech-it-consulting

# Check active connections
ss -tulpn | grep LISTEN
```

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| SSH Key Permission Denied | `chmod 600 ~/.ssh/hostinger_deploy` |
| Nginx 403 Forbidden | `chown -R www-data:www-data /var/www/MegaInfoTech-it-consulting` |
| Old build showing | `sudo systemctl restart nginx` |
| Build deployment failed | Check GitHub Actions logs → Errors section |
| VPS disk full | `du -sh /var/www/MegaInfoTech-it-consulting/*` to find large files |

---

## 🔐 Security Checklist

- [ ] SSH key restricted to deploy action only
- [ ] VPS firewall allows only necessary ports (22, 80, 443)
- [ ] Nginx security headers configured
- [ ] SSL/HTTPS enabled with Let's Encrypt
- [ ] Regular backups scheduled
- [ ] Deployment logs monitored

---

## 📈 Performance Tips

1. **Enable Gzip Compression** (already in Nginx config)
2. **Cache Static Files** (already in Nginx config)
3. **Use CDN** for static assets (optional)
4. **Monitor Server Resources**:
   ```bash
   top
   free -h
   ```

---

## 🆕 Add New Environment Variables

1. **Add to GitHub Secrets**
2. **Update workflow** (`.github/workflows/deploy-to-hostinger.yml`):
   ```yaml
   env:
     REACT_APP_VAR: ${{ secrets.REACT_APP_VAR }}
   ```
3. **Rebuild and push**

---

## 📞 Need Help?

- GitHub Actions docs: https://docs.github.com/en/actions
- Nginx docs: https://nginx.org/en/docs/
- React deployment: https://create-react-app.dev/deployment
- Hostinger Support: https://www.hostinger.com/support

---

**Repository:** Subrat053/MegaInfoTech-it-consulting  
**Deployed via:** GitHub Actions + Hostinger VPS ✨
