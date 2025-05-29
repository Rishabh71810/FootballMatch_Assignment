# Football Data API Setup Guide

## 🔑 Getting Your API Key

1. **Visit Football-Data.org**
   - Go to: https://www.football-data.org/
   - Click "Get free API key" or "Register"

2. **Create Free Account**
   - Sign up with your email
   - Verify your email address
   - Log in to your account

3. **Get Your API Key**
   - Go to your dashboard/profile
   - Copy your API key (it looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

## 🛠 Adding API Key to Your Project

1. **Open server.js file**
2. **Find this line (around line 19):**
   ```javascript
   'X-Auth-Token': 'YOUR_API_KEY_HERE' // Replace with your actual API key
   ```

3. **Replace with your actual key:**
   ```javascript
   'X-Auth-Token': 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6' // Your actual API key
   ```

4. **Save the file** - The server will automatically restart

## 🎯 Testing the API

After adding your key, test the endpoints:
- http://localhost:5000/api/matches
- http://localhost:5000/api/matches/current

## 📊 Free Tier Limits

- **10 requests per minute**
- **Limited competitions** (Eredivisie is included)
- **Basic match data**

## ✅ Success Indicators

When working correctly, you should see:
- Real Dutch football team names (Ajax, PSV, Feyenoord, etc.)
- Actual upcoming match dates
- Live match statuses
- No "mock data" messages in console

## 🚨 Troubleshooting

If you see errors:
- **403 Forbidden**: API key is invalid or missing
- **429 Too Many Requests**: You've exceeded rate limits
- **404 Not Found**: Competition or matchday not available

## 🔒 Security Note

Never commit your API key to public repositories. Consider using environment variables for production:

```javascript
'X-Auth-Token': process.env.FOOTBALL_API_KEY || 'YOUR_API_KEY_HERE'
``` 