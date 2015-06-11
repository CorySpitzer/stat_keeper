Stats.Team = DS.Model.extend({
  teamName: DS.attr(),
  players: DS.hasMany('player', {async: true})
});
