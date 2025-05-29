import React from 'react';

const MatchCard = ({ match }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="match-card">
      {/* Match Status */}
      <div className="match-header">
        <span className="status-badge status-scheduled">
          {match.status}
        </span>
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Matchday {match.matchday}
        </span>
      </div>

      {/* Teams */}
      <div className="match-teams">
        <div className="team">
          <div className="team-logo">
            {match.homeTeam.slice(0, 3).toUpperCase()}
          </div>
          <div className="team-name">
            {match.homeTeam}
          </div>
        </div>
        
        <div className="vs">VS</div>
        
        <div className="team">
          <div className="team-logo">
            {match.awayTeam.slice(0, 3).toUpperCase()}
          </div>
          <div className="team-name">
            {match.awayTeam}
          </div>
        </div>
      </div>

      {/* Date and Time */}
      <div className="match-info">
        <div className="match-date">
          <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            {formatDate(match.date)}
          </span>
        </div>

        {/* Competition */}
        <div>
          <span className="competition-tag">
            {match.competition}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard; 