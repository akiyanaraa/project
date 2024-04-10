import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LeaguesPage from './LeaguesPage';
import TeamsPage from './TeamsPage';
import LeagueCalendarPage from './LeagueCalendarPage';
import TeamCalendarPage from './TeamCalendarPage';
import TeamPage from './TeamPage';
import PlayerPage from './PlayerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LeaguesPage} />
          <Route exact path="/teams" component={TeamsPage} />
          <Route exact path="/league/:id/calendar" component={LeagueCalendarPage} />
          <Route exact path="/team/:id/calendar" component={TeamCalendarPage} />
          <Route exact path="/team/:id" component={TeamPage} />
          <Route exact path="/player/:id" component={PlayerPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;