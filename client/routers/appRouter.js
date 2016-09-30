var AppRouter = Backbone.Router.extend({
  initialize: function(params) {
    this.on('route:getSong', function(title) {
      if (params.collection.length === 0) {
        var revealApp = true;
        $('#app').hide();
        $('#loading').show();
      }
      setTimeout(function() {
        console.log(params.collection.length);
        var song = params.collection.findWhere({'title': title});
        song.play();
        song.enqueue();
        if (revealApp) {
          $('#loading').hide();
          $('#app').show();
          revealApp = false;
        }
      }, 1000);
    }, this);
  },
  routes: {
    "songs/:title": "getSong",
  }
});

// Start Backbone history a necessary step for bookmarkable URL's
