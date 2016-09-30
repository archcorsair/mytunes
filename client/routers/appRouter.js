var AppRouter = Backbone.Router.extend({
  initialize: function(params) {
    this.on('route:getSong', function(title) {
      var results = params.collection.findWhere({'title': title});
      $('#app').hide();
      $('#loading').show();
      setTimeout(function() {
        console.log(params.collection.length);
        params.collection.findWhere({'title': title}).play();
        $('#loading').hide();
        $('#app').show();
      }, 1000);
    }, this);
  },
  routes: {
    "songs/:title": "getSong",
  }
});

// Start Backbone history a necessary step for bookmarkable URL's
