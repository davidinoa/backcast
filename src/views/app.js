var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    return this;
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({collection: this.videos, el: this.$('.list')}).render();
    new VideoPlayerView({model: this.videos[0]});
    return this;
  },

  template: templateURL('src/templates/app.html')

});


