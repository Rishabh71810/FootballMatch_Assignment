# 🚀 Deploying to Vercel

This guide will help you deploy your Football Matches application to Vercel.

## Prerequisites

1. **GitHub Account** - Your code needs to be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Football Data API Key** - You already have: `5045686994e5422186bd5abd21b84cd6`

## Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Football Matches App"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration
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
# - Settings? N

# Add environment variable
vercel env add FOOTBALL_API_KEY
# Enter value: 5045686994e5422186bd5abd21b84cd6
# Select: Production

# Redeploy with environment variables
vercel --prod
```

## Step 3: Configuration Details

The following files are already configured for Vercel:

### `vercel.json`
- Configures both Node.js API and React frontend
- Routes API calls to serverless functions
- Serves static React build

### `server.js`
- Modified to work as Vercel serverless function
- Uses environment variables for API key
- Extended cache duration for production

### `client/package.json`
- Added `vercel-build` script

## Step 4: Environment Variables

Set these in Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| `FOOTBALL_API_KEY` | `5045686994e5422186bd5abd21b84cd6` | Production |
| `NODE_ENV` | `production` | Production |

## Step 5: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## API Endpoints

Once deployed, your API will be available at:
- `https://your-app.vercel.app/api/matches` - Get matches
- `https://your-app.vercel.app/api/health` - Health check

## Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`

2. **API Not Working**
   - Verify environment variables are set
   - Check API rate limits

3. **React App Not Loading**
   - Ensure `client/build` directory exists
   - Check build logs

### Local Testing:

```bash
# Install Vercel CLI
npm install -g vercel

# Test locally
vercel dev
```

## Production URLs

After deployment, you'll get:
- **Frontend**: `https://your-app.vercel.app`
- **API**: `https://your-app.vercel.app/api/matches`

## Performance Optimizations

The app includes:
- ✅ 5-minute API caching
- ✅ Serverless functions
- ✅ CDN distribution
- ✅ Automatic HTTPS
- ✅ Error handling with fallbacks

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test API endpoints directly
4. Monitor rate limits on Football Data API

---

🎉 **Your app should now be live on Vercel!** 