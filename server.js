const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'client/build')));

// Football Data API configuration
const API_BASE_URL = '';
const API_HEADERS = {
    'X-Unfold-Goals': 'true',
    'X-Auth-Token': ''
};

// Cache to prevent too many API calls
let matchesCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 60000; // 1 minute cache

// Helper function to check if cache is valid
const isCacheValid = () => {
    return matchesCache && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION);
};

// API Routes
app.get('/api/matches', async (req, res) => {
    try {
        // Return cached data if available and valid
        if (isCacheValid()) {
            console.log('Returning cached data to avoid rate limits');
            return res.json(matchesCache);
        }

        // Use the exact API call you specified
        const response = await fetch(`${API_BASE_URL}/competitions/2003/matches?matchday=1`, {
            method: 'GET',
            headers: API_HEADERS
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Format the matches
        const matches = data.matches.map(match => ({
            id: match.id,
            homeTeam: match.homeTeam.name,
            awayTeam: match.awayTeam.name,
            date: match.utcDate,
            competition: match.competition.name,
            matchday: match.matchday,
            status: match.status
        }));
        
        const responseData = {
            success: true,
            matches: matches,
            total: matches.length,
            matchday: data.matches[0]?.matchday || 1,
            competition: data.competition?.name || 'Eredivisie'
        };

        // Cache the response
        matchesCache = responseData;
        cacheTimestamp = Date.now();
        
        res.json(responseData);
        
    } catch (error) {
        console.error('Error fetching matches:', error);
        
        // Return cached data if available, even if expired
        if (matchesCache) {
            console.log('API error, returning cached data');
            return res.json({
                ...matchesCache,
                note: 'Cached data due to API limitations'
            });
        }
        
        res.status(500).json({
            success: false,
            error: 'Failed to fetch matches',
            message: error.message
        });
    }
});

// Alternative endpoint for current matchday (same as above for consistency)
app.get('/api/matches/current', async (req, res) => {
    try {
        // Return cached data if available and valid
        if (isCacheValid()) {
            console.log('Returning cached data to avoid rate limits');
            return res.json(matchesCache);
        }

        // Use the exact API call you specified
        const response = await fetch(`${API_BASE_URL}/competitions/2003/matches?matchday=1`, {
            method: 'GET',
            headers: API_HEADERS
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        const matches = data.matches.map(match => ({
            id: match.id,
            homeTeam: match.homeTeam.name,
            awayTeam: match.awayTeam.name,
            date: match.utcDate,
            competition: match.competition.name,
            matchday: match.matchday,
            status: match.status
        }));
        
        const responseData = {
            success: true,
            matches: matches,
            total: matches.length,
            matchday: data.matches[0]?.matchday || 1,
            competition: data.competition?.name || 'Eredivisie'
        };

        // Cache the response
        matchesCache = responseData;
        cacheTimestamp = Date.now();
        
        res.json(responseData);
        
    } catch (error) {
        console.error('Error fetching current matchday:', error);
        
        // Return cached data if available, even if expired
        if (matchesCache) {
            console.log('API error, returning cached data');
            return res.json({
                ...matchesCache,
                note: 'Cached data due to API limitations'
            });
        }
        
        res.status(500).json({
            success: false,
            error: 'Failed to fetch current matchday matches',
            message: error.message
        });
    }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 