// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  className: 'table table-striped song-queue',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<caption>Queue</caption><thead><tr><th>#</th><th>Artist</th><th>Title</th></tr></thead>').append(
      this.collection.map(function(song, i) {
        return new SongQueueEntryView({model: song}).render({index: i + 1});
      })
    );
  }

});
