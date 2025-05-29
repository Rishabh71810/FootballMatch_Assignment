import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import MatchCard from './components/MatchCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [endpoint, setEndpoint] = useState('/api/matches');

  const fetchMatches = useCallback(async (apiEndpoint = endpoint) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      
      if (data.success) {
        setMatches(data.matches);
      } else {
        setError(data.message || 'Failed to fetch matches');
      }
    } catch (err) {
      setError('Network error: Unable to fetch matches');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  const handleRefresh = () => {
    fetchMatches();
  };

  const handleCurrentMatchday = () => {
    setEndpoint('/api/matches/current');
    fetchMatches('/api/matches/current');
  };

  const handleUpcomingMatches = () => {
    setEndpoint('/api/matches');
    fetchMatches('/api/matches');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />
      
      <main className="main">
        <div className="container">
          {/* Controls */}
          <div className="controls">
            <button
              onClick={handleUpcomingMatches}
              className={`btn ${endpoint === '/api/matches' ? 'btn-primary' : 'btn-secondary'}`}
            >
              <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Upcoming Matches
            </button>
            
            <button
              onClick={handleCurrentMatchday}
              className={`btn ${endpoint === '/api/matches/current' ? 'btn-primary' : 'btn-secondary'}`}
            >
              <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Current Matchday
            </button>
            
            <button
              onClick={handleRefresh}
              className="btn btn-primary"
              disabled={loading}
            >
              <svg 
                style={{ 
                  width: '1.25rem', 
                  height: '1.25rem',
                  animation: loading ? 'spin 1s linear infinite' : 'none'
                }} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>

          {/* Content */}
          {loading && <LoadingSpinner />}
          
          {error && <ErrorMessage message={error} onRetry={handleRefresh} />}
          
          {!loading && !error && (
            <div className="matches-grid">
              {matches.length > 0 ? (
                matches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))
              ) : (
                <div className="no-matches">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>No matches found</div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p style={{ marginBottom: '0.5rem' }}>
            Data provided by{' '}
            <a 
              href="https://www.football-data.org" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Football-Data.org
            </a>
          </p>
          <p style={{ fontSize: '0.875rem' }}>
            API URL: http://api.football-data.org/v4/competitions/2003/matches
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
