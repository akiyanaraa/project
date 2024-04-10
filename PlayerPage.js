// PlayerPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PlayerPage() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const apiKey = '691f76459e3b4e81915f26c109dbcc3a';

  useEffect(() => {
    fetch(`https://api.football-data.org/v2/players/${id}`, {
      headers: {
        'X-Auth-Token': apiKey
      }
    })
    .then(response => response.json())
    .then(data => setPlayer(data))
    .catch(error => console.error('Error fetching player:', error));
  }, [id]);

  return (
    <div>
      <h1>Player Info</h1>
      {player ? (
        <div>
          <h2>{player.name}</h2>
          {/* Display other player details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlayerPage;
