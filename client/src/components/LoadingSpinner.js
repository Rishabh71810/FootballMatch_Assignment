import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading matches...</p>
      <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '0.5rem' }}>
        Fetching data from Football API
      </p>
    </div>
  );
};

export default LoadingSpinner; 