Stats.Router.map(function() {
  this.resource('teams', {path: '/'}, function() {
    this.resource('new-team');
    this.resource('team', {path: 'teams/:team_id'}, function() {
      this.resource('players');
      this.resource('new-player');
    });
  });
  this.resource('player', {path: 'players/:player_id'});
});
