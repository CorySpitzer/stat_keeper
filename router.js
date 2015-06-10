Stats.Router.map(function() {
  this.resource('teams', {path: '/'}, function() {
    this.resource('new-team');
  });
  this.resource('team', {path: 'teams/:team_id'});
});
