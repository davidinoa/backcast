var VideoPlayerView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title' : 'render'
  },

  initialize: function () {
    this.render();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
