// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var _this = this;
    console.log('outside: ', this);
    $.ajax({
      type: 'GET',
      url: 'https://api.parse.com/1/classes/songs/',
      success: function(someD) {
        console.log('AJAX Success');
        console.log('inside: ', _this);
        someD.results.forEach(function(song) {
          _this.add(song);
        });
        _this.trigger('loaded');
      }
    });

  }

});
