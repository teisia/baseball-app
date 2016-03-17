if (Meteor.isClient) {

  leagueTotals = {
    'AB': 183628,
    'H': 42107,
    '2B': 8242,
    '3B': 8242,
    'HR': 4909,
    'SO': 37446,
    'BB': 14073,
  };


  batter = {
    'name': "Kike Hernandez",
    'AB': 202,
    'R': 24,
    'H': 62,
    '2B': 12,
    '3B': 2,
    'HR': 7,
    'RBI': 22,
    'BB': 11,
    'SO': 46,
    'SB': 0,
    'CS': 2,
  };

  // Example pitcher
  // I've included some advanced stats here that I need to figure out.
  pitcher = {
    'name': 'Clayton Kershaw',
    'IP': 232.2,
    'Hits': 163,
    '2B': 26,
    '3B': 2,
    'HR': 15,
    'BB': 42,
    'SO': 301,
    'HBP': 5,
    'BK': 3,
    'WP': 9,
    'BF': 890,
  };

  // Use this to store results of multiple matchups to test that everything works.
  gameObject = {
    'SO' : 0,
    'BB' : 0,
    'HBP': 0,
    'H' : 0,
    '2B' : 0,
    '3B' : 0,
    'HR' : 0,
    'OUT' : 0,
  };

  Template.game.events({
    'click button': function () {
      console.log('hello');
}
})

  Template.game.helpers({
//pitchers
    battersFaced: function(obj) {
      //console.log('Real BF:', obj.BF);
      //console.log('Calc BF:', (obj.IP * 3) + obj.Hits + obj.BB);

      if (obj.BF) return obj.BF;

      // Alternative calculation for batters faced
      // (IP x 3) + Hits + BB
      return (obj.IP * 3) + obj.Hits + obj.BB;
    },

    probabilitySO: function(obj) {
    return obj.SO / this.battersFaced(obj);
    },

    probabilityBB: function(obj) {
   return obj.BB / this.battersFaced(obj);
 },

 // Pitcher hits batter with a pitch!
 probabilityHBP: function(obj) {
   return obj.HBP / this.battersFaced(obj);
 },

 // Wild Pitch!
 probabilityWP: function(obj) {
   return obj.HBP / this.battersFaced(obj);
 },

 // Calculate probability of giving up a home run
 probabilityHR: function(obj) {
   return obj.HR / this.battersFaced(obj);
 },

 // Calculate probability of giving up a single
 probabilitySingle: function(obj) {
   return (obj.Hits - obj['2B'] - obj['3B'] - obj.HR) / this.battersFaced(obj);
 },

 probabilityDouble: function(obj) {
   return obj['2B'] / this.battersFaced(obj);
 },

 probabilityTriple: function(obj) {
   return obj['3B'] / this.battersFaced(obj);
 },

 totalPAs: function(obj) {
    // PA = AB + BB;
    return obj['AB'] + obj['BB'];
  },

  // Calculate batter's walk probability
  probabilityBB: function(obj) {
    return obj['BB'] / this.totalPAs(obj);
  },

  // Calculate batter's strike out probability
  probabilitySO: function(obj) {
    return obj['SO'] / this.totalPAs(obj);
  },

  // Calculate batter's probability of hitting a single.
  probabilitySingle: function(obj) {
    return ((obj['H'] - (obj['2B'] + obj['3B'] + obj['HR'])) / this.totalPAs(obj));
  },

  // Calculate batter's probability of hitting a double.
  probabilityDouble: function(obj) {
    return obj['2B'] / this.totalPAs(obj);
  },

  // Calculate batter's probability of hitting a triple.
  probabilityTriple: function(obj) {
    return obj['3B'] / this.totalPAs(obj);
  },

  // Calculate batter's probability of hitting a homerun.
  probabilityHR: function(obj) {
    return obj['HR'] / this.totalPAs(obj);
  },

  avgH: function() {
    return leagueTotals.H / leagueTotals.AB;
  },

  avgSO: function() {
    return leagueTotals.SO / leagueTotals.AB;
  },

  avgBB: function() {
    return leagueTotals.BB / leagueTotals.AB;
  },

  avg2B: function() {
    return leagueTotals['2B'] / leagueTotals.AB;
  },

  avg3B: function() {
    return leagueTotals['3B'] / leagueTotals.AB;
  },

  avgHR: function() {
    return leagueTotals.HR / leagueTotals.AB;
  }


})

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
