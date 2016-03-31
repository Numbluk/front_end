var Albums = new Backbone.Collection.extend({
  model: Album,
  url: "/albums.json"
});
