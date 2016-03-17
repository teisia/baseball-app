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

if(Meteor.isClient) {
Template.batters.helpers({
    batters: function() {
      return ReactiveMethod.call('BattersSearch');
    }
});
}
