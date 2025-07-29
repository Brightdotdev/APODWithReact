# 🚀 Cloudflare Pages Deployment Guide

## Quick Setup for NASA APOD Viewer

### Prerequisites
- ✅ GitHub repository with your code
- ✅ NASA API key from [https://api.nasa.gov/](https://api.nasa.gov/)
- ✅ Cloudflare account

### Step 1: Prepare Your Code
Your code is already ready! The following files have been configured:
- ✅ `vite.config.js` - Updated for Cloudflare Pages
- ✅ `public/_redirects` - Handles client-side routing
- ✅ `README.md` - Updated with deployment info

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Ready for Cloudflare Pages deployment"
git push origin main
```

### Step 3: Deploy to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Visit [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
   - Sign in to your account

2. **Create New Pages Project**
   - Click "Pages" in the sidebar
   - Click "Create a project"
   - Choose "Connect to Git"

3. **Connect Your Repository**
   - Select your GitHub account
   - Choose your NASA APOD repository
   - Click "Begin setup"

4. **Configure Build Settings**
   ```
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   Root directory: / (leave empty)
   ```

5. **Add Environment Variables**
   - Click "Environment variables"
   - Add new variable:
     - **Variable name**: `VITE_API_KEY`
     - **Value**: Your NASA API key
   - Click "Save"

6. **Deploy**
   - Click "Save and Deploy"
   - Wait for build to complete (usually 2-3 minutes)

### Step 4: Your App is Live! 🎉
- Your app will be available at: `https://your-project-name.pages.dev`
- You can customize the domain in the Pages settings

### Troubleshooting

**Build Fails?**
- Check that your NASA API key is correct
- Verify all dependencies are in `package.json`
- Check the build logs in Cloudflare Pages

**App Shows Loading Forever?**
- Verify `VITE_API_KEY` environment variable is set
- Check browser console for API errors

**Routing Doesn't Work?**
- The `_redirects` file should handle this automatically
- If issues persist, check Cloudflare Pages settings

### Next Steps
- Customize your domain (optional)
- Set up automatic deployments on git push
- Monitor your app's performance in Cloudflare Analytics

---

**Your NASA APOD Viewer is now live on the web! 🌌** 