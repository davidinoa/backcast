var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.channelTitle);
    this.set('details', video.snippet.description);
    this.set('image', video.snippet.thumbnails.default.url);
  },

  select: function() {
    this.trigger('select', this);
  }

});