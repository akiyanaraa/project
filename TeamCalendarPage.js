// TeamCalendarPage.js

import React, { useState, useEffect } from 'react';

function TeamCalendarPage({ match }) {
  const teamId = match.params.id;
  const [matches, setMatches] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const apiKey = '691f76459e3b4e81915f26c109dbcc3a';

  useEffect(() => {
    fetch(`https://api.football-data.org/v2/teams/${teamId}/matches`, {
      headers: {
        'X-Auth-Token': apiKey
      }
    })
    .then(response => response.json())
    .then(data => setMatches(data.matches))
    .catch(error => console.error('Error fetching team matches:', error));
  }, [teamId]);

  const handleFilterChange = () => {
    // Handle filter change (start date, end date)
  };

  return (
    <div>
      <h1>Team Calendar</h1>
      <div>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <button onClick={handleFilterChange}>Apply Filters</button>
      </div>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>{/* Display match details */}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamCalendarPage;
