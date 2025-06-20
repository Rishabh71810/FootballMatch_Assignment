# Upcoming Football Matches

A modern web application built with React.js and Node.js to display upcoming football matches from the Eredivisie (Netherlands Football League) using the Football Data API.

## 🚀 Features

- **Modern UI**: Built with React.js and styled with Tailwind CSS
- **Real-time Data**: Fetches live match data from Football-Data.org API
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Two Views**: Upcoming matches and current matchday matches
- **Error Handling**: Graceful error handling with retry functionality
- **Loading States**: Beautiful loading animations

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **API**: Football-Data.org API
- **HTTP Client**: node-fetch

## 📋 API Information

- **API URL**: `http://api.football-data.org/v4/competitions/2003/matches`
- **Competition**: Eredivisie (ID: 2003)
- **Headers**: `X-Unfold-Goals: true`

### API Endpoints Used:
- `/competitions/2003/matches?status=SCHEDULED` - Upcoming matches
- `/competitions/2003/matches?matchday=1` - Current matchday matches

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Matches_Assignment
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on `http://localhost:5000`
   - React development server on `http://localhost:3000`

### Alternative: Start servers separately

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

## 🏗 Project Structure

```
Matches_Assignment/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.js
│   │   │   ├── MatchCard.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── ErrorMessage.js
│   │   ├── App.js         # Main React component
│   │   ├── index.css      # Tailwind CSS styles
│   │   └── index.js       # React entry point
│   ├── public/
│   ├── tailwind.config.js # Tailwind configuration
│   └── package.json       # Frontend dependencies
├── server.js              # Express backend server
├── package.json           # Backend dependencies and scripts
└── README.md              # This file
```

## 🎨 UI Features

- **Header**: Clean header with football icon and competition info
- **Match Cards**: Beautiful cards showing:
  - Team names with abbreviations
  - Match date and time
  - Match status (Scheduled, Live, Finished)
  - Matchday information
  - Competition name
- **Controls**: Toggle between upcoming matches and current matchday
- **Loading States**: Animated spinner during API calls
- **Error Handling**: User-friendly error messages with retry option

## 🔧 Configuration

### Tailwind CSS
The project uses custom Tailwind configuration with:
- Custom color palette (primary blues, success greens)
- Custom animations
- Responsive design utilities

### API Configuration
Backend server configuration:
- Port: 5000 (configurable via PORT environment variable)
- CORS enabled for cross-origin requests
- Static file serving for React build

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🚀 Production Build

1. **Build the React app**
   ```bash
   cd client
   npm run build
   cd ..
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

The production server will serve the React build files and API endpoints on port 5000.

## 🔍 API Endpoints

### Backend API Routes:
- `GET /api/matches` - Get upcoming scheduled matches
- `GET /api/matches/current` - Get current matchday matches
- `GET /` - Serve React application

### Response Format:
```json
{
  "success": true,
  "matches": [
    {
      "id": 12345,
      "homeTeam": "Ajax",
      "awayTeam": "PSV",
      "date": "2023-12-01T15:00:00Z",
      "competition": "Eredivisie",
      "matchday": 15,
      "status": "SCHEDULED"
    }
  ],
  "total": 10
}
```

## 🎯 Key Features Implemented

✅ **Basic Requirements:**
- List of upcoming matches
- Team names display
- Scheduled date/time
- Data from Football Data API
- Backend to fetch and serve data

✅ **Additional Features:**
- Modern React.js frontend
- Tailwind CSS styling
- Responsive design
- Error handling
- Loading states
- Multiple views (upcoming/current matchday)
- Clean component architecture

## 🏆 Competition Details

- **League**: Eredivisie (Netherlands)
- **Competition ID**: 2003
- **Teams**: Top Dutch football teams
- **Data Source**: Football-Data.org

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Football-Data.org** for providing the free football API
- **React.js** for the excellent frontend framework
- **Tailwind CSS** for the utility-first CSS framework
- **Express.js** for the lightweight backend framework #   F o o t b a l l M a t c h _ A s s i g n m e n t  
 