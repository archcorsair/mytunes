// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td><%= title %></td><td><a href="#/songs/<%= title %>"><span class="glyphicon glyphicon-link" aria-hidden="true"></span></a></td>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
      this.render();
    }
  },

  render: function() {
    return this.$el.html(
      '<td>' + this.model.get('playCount') + '</td>' +
      this.template(this.model.attributes)
    );
  }

});
