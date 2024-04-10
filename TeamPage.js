// TeamPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TeamPage() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const apiKey = '691f76459e3b4e81915f26c109dbcc3a';

  useEffect(() => {
    fetch(`https://api.football-data.org/v2/teams/${id}`, {
      headers: {
        'X-Auth-Token': apiKey
      }
    })
    .then(response => response.json())
    .then(data => setTeam(data))
    .catch(error => console.error('Error fetching team:', error));
  }, [id]);

  return (
    <div>
      <h1>Team Info</h1>
      {team ? (
        <div>
          <h2>{team.name}</h2>
          {/* Display other team details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TeamPage;

