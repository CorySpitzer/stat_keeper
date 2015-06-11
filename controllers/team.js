Stats.TeamController = Ember.Controller.extend({
  needs: ['team'],
  actions: {
    addPlayer: function() {
      var newPlayer = this.store.createRecord('player', {
        playerName: this.get('playerName')
      });

      newPlayer.save();

      var team = this.get('controllers.team.model');
      team.get('players').pushObject(newPlayer);
      team.save();

      this.set('playerName', '');

      this.transitionToRoute('team', team.id);
    }
  }
});
