// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',
  className: 'table table-striped',

  initialize: function() {
    this.render();
    this.collection.on('loaded', this.render, this);
    this.collection.on('notFound', this.renderError, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<thead><tr><th>Play Count</th><th>Artist</th><th>Title</th></tr></thead>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  },

  renderError: function() {
    console.log('renderError IS being called');
    this.$el.children().detach();
    this.$el.html('<th>Library</th>').append($('<tr><td>Error Loading Library</td></tr>'));
  }

});
