Stats.NewTeamController = Ember.Controller.extend({
  actions: {
    saveTeam: function() {
      var newTeam = this.store.createRecord('team', {
        teamName: this.get('teamName')
      });

      newTeam.save();

    }
  }
});
