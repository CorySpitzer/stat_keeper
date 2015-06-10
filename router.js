Stats.Router.map(function() {
  this.resource('teams', {path: '/'}, function() {
    this.resource('new-team');
  });
});
