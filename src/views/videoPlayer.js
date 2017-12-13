var VideoPlayerView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'render'
  },

  initialize: function () {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  selectVideo: function (selectedVideo) {
    this.model = selectedVideo;
    this.render();
  },

  render: function() {
    if (!this.model) {
      this.$el.html('<div class="loading">Please wait...</div>');
    } else {
      this.$el.html(this.template(this.model.attributes));
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
