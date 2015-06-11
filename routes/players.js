Stats.PlayersRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('player');
  }
});
