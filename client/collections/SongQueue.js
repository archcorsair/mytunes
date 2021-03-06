// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add enqueue', function () {
      console.log('getting a thing');
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function (song) {
      this.shift();
      if (this.length >= 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function (song) {
      this.remove(song);
    });
  },

  playFirst: function () {
    this.first().play();
  }

});
