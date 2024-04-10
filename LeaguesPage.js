import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LeaguesPage() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetch('https://api.football-data.org/v2/competitions', {
      headers: {
        'X-Auth-Token': '691f76459e3b4e81915f26c109dbcc3a'
      }
    })
    .then(response => response.json())
    .then(data => setLeagues(data.competitions))
    .catch(error => console.error('Error fetching leagues:', error));
  }, []);

  return (
    <div>
      <h1>Leagues</h1>
      <ul>
        {leagues.map((league) => (
          <li key={league.id}>
            <Link to={`/league/${league.id}/calendar`}>{league.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaguesPage;
