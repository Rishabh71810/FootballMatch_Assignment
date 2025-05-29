# 🚀 Deploying to Vercel - UPDATED

This guide will help you deploy your Football Matches application to Vercel.

## 🔧 **IMPORTANT: 404 Error Fix**

If you're getting a 404 error after deployment, this is now fixed with the updated configuration!

## Prerequisites

1. **GitHub Account** - Your code needs to be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Football Data API Key** - You already have: `5045686994e5422186bd5abd21b84cd6`

## Step 1: Build React App Locally

```bash
# Build the React app first
cd client
npm run build
cd ..
```

## Step 2: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Fixed Vercel deployment with proper routing"

# Add your GitHub repository as origin (replace with your repo)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. **IMPORTANT**: In the "Configure Project" section:
   - Set **Framework Preset** to "Other"
   - Set **Build Command** to: `cd client && npm ci && npm run build`
   - Set **Output Directory** to: `client/build`
   - Set **Install Command** to: `npm install`
5. Add environment variable:
   - Name: `FOOTBALL_API_KEY`
   - Value: `5045686994e5422186bd5abd21b84cd6`
6. Click "Deploy"

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? [Your account]
# - Link to existing project? N
# - Project name: [football-matches-app]
# - Directory: [./]
# - Build Command: cd client && npm ci && npm run build
# - Output Directory: client/build
# - Settings? Y

# Add environment variable
vercel env add FOOTBALL_API_KEY
# Enter value: 5045686994e5422186bd5abd21b84cd6
# Select: Production

# Redeploy with environment variables
vercel --prod
```

## Step 4: Configuration Details

### Updated `vercel.json` (Fixed)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

This configuration:
- ✅ Handles API routes properly
- ✅ Serves React app through Express
- ✅ Fixes 404 errors
- ✅ Works with serverless functions

## Step 5: Environment Variables

Set in Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| `FOOTBALL_API_KEY` | `5045686994e5422186bd5abd21b84cd6` | Production |
| `NODE_ENV` | `production` | Production |

## Step 6: Verify Deployment

After deployment, test these URLs:

1. **Frontend**: `https://your-app.vercel.app`
2. **API Health**: `https://your-app.vercel.app/api/health`
3. **Matches API**: `https://your-app.vercel.app/api/matches`

## 🎯 **Troubleshooting the 404 Error**

The 404 error was caused by incorrect static file routing. The fix:

### ❌ **Old Configuration** (Caused 404)
```json
{
  "routes": [
    { "src": "/api/(.*)", "dest": "/server.js" },
    { "src": "/(.*)", "dest": "/client/build/$1" }
  ]
}
```

### ✅ **New Configuration** (Fixed)
```json
{
  "routes": [
    { "src": "/api/(.*)", "dest": "/server.js" },
    { "src": "/(.*)", "dest": "/server.js" }
  ]
}
```

**Why this works:**
- Express server handles static file serving
- React Router works properly
- API routes are preserved
- No 404 errors for React routes

## Common Issues & Solutions

### 1. **Still Getting 404?**
```bash
# Redeploy with latest changes
git add .
git commit -m "Apply 404 fix"
git push origin main
# Vercel will auto-deploy
```

### 2. **Build Fails?**
- Ensure `client/build` folder exists
- Run `cd client && npm run build` locally first
- Check Vercel build logs

### 3. **API Not Working?**
- Verify environment variables in Vercel dashboard
- Check Function logs in Vercel dashboard
- Test API endpoints directly

### 4. **Local Testing**
```bash
# Test the deployment locally
npm install -g vercel
vercel dev
```

## Performance Features

✅ **5-minute API caching** (prevents rate limits)  
✅ **Serverless functions** (automatic scaling)  
✅ **CDN distribution** (fast global access)  
✅ **Automatic HTTPS** (secure by default)  
✅ **Error handling** (graceful fallbacks)  

## Production URLs

After successful deployment:
- **App**: `https://your-app.vercel.app`
- **API**: `https://your-app.vercel.app/api/matches`
- **Health**: `https://your-app.vercel.app/api/health`

---

🎉 **Your app should now work perfectly on Vercel!**

The 404 error is fixed and your football matches app should be fully functional. 