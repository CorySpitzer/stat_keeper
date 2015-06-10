Stats.NewTeamController = Ember.Controller.extend({
  actions: {
    saveTeams: function() {
      var newTeam1 = this.store.createRecord('team', {
        teamName: this.get('teamName1')
      });
      var newTeam2 = this.store.createRecord('team', {
        teamName: this.get('teamName2')
      });

      newTeam1.save();
      newTeam2.save();
      this.transitionToRoute('teams');
    }
  }
});
