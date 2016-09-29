// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var _this = this;
    console.log('outside: ', this);
    $.ajax({
      type: 'GET',
      url: 'https://api.parse.com/1/classes/songs/',
      success: function(someData) {
        console.log('AJAX Success');
        someData.results.forEach(function(song) {
          _this.add(song);
        });
        _this.trigger('loaded');
      },
      error: function(err) {
        _this.trigger('notFound');
        // throw new Error('AJAX Failed');
      }
    });

  }

});
