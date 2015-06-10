Stats.TeamsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('team');
  }
});
