Meteor.methods({
    BattersSearch: function() {
        try {
            var search_result = HTTP.call(
                'GET', 'https://baseballdataapi.herokuapp.com/batters',
            );
            return search_result.data;
        } catch (_error) {
            throw new Meteor.Error("No Result", "Failed to fetch ...");
      }
    }
});

Meteor.methods({
    PitchersSearch: function() {
        try {
            var search_result = HTTP.call(
                'GET', 'https://baseballdataapi.herokuapp.com/pitchers',
            );
            return search_result.data;
        } catch (_error) {
            throw new Meteor.Error("No Result", "Failed to fetch ...");
      }
    }
});

Meteor.methods({
    AvgSearch: function() {
        try {
            var search_result = HTTP.call(
                'GET', 'https://baseballdataapi.herokuapp.com/league-avg',
            );
            return search_result.data;
        } catch (_error) {
            throw new Meteor.Error("No Result", "Failed to fetch ...");
      }
    }
});

if (Meteor.isClient) {
Template.batters.helpers({
    batters: function() {
      return ReactiveMethod.call('BattersSearch');
    }
  });
}

if (Meteor.isClient) {
Template.pitcher.helpers({
    pitcher: function() {
      return ReactiveMethod.call('PitchersSearch');
    }
  });
}

if (Meteor.isClient) {
Template.game.helpers({
    avg: function() {
      return ReactiveMethod.call('AvgSearch');
    }
  });
}
