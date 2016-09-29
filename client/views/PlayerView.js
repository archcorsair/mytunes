// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  // el: '<audio controls autoplay />',
  tagName: 'div',
  className: 'player clearfix',
  events: {'ended': 'audioEnded'},
  audioEnded: function() {
    this.model.ended();
  },

  initialize: function() {
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    // return this.$el.html(
    this.$el.html('');
    this.$el.append($('<div class="albumArt" />').append(`<img src="${this.model.get('artwork_url')}" />`));
    this.$el.append(
      $('<div class="details" />')
        .append($('<div class="artist" />').text(this.model.get('artist')))
        .append($('<div class="title" />').text(this.model.get('title')))
        .append($('<audio controls autoplay />').attr('src', this.model ? this.model.get('url') : ''))
      );
    return this.$el;
  }

});
