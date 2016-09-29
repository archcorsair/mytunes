// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(opts) {
    return this.$el.html(
      '<td>' + opts.index + '</td>' +
      this.template(this.model.attributes)
    );
  }
});
