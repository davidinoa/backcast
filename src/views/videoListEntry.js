var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));

    this.$('.video-list-entry-title').text(this.model.get('title'));
    this.$('.video-list-entry-detail').text(this.model.get('details'));
    this.$('.media-object').attr('src', this.model.get('image'));

    return this;
  },

  handleClick: function(e) {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});



