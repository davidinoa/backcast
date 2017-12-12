var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    console.log(this.videos);
    return this;
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({collection: this.videos, el: this.$('.list')});

    return this;
  },

  template: templateURL('src/templates/app.html')

});


