// TeamsPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const apiKey = '691f76459e3b4e81915f26c109dbcc3a';

  useEffect(() => {
    fetch('https://api.football-data.org/v2/teams', {
      headers: {
        'X-Auth-Token': apiKey
      }
    })
    .then(response => response.json())
    .then(data => setTeams(data.teams))
    .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/team/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamsPage;
