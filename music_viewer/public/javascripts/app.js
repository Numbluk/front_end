var App = {
  init: function() {
    this.fetchAlbums();
  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.view = new AlbumsView({ collection: this.albums });
    this.albums.fetch({
      success: this.albumsLoaded.bind(this)
    });
  },

  fetchTracks: function(name) {
    var tracks = new (Tracks.extend({
      url: "/albums/" + name + ".json"
    }))();
    console.log(tracks);

    this.selected_album = this.albums.findWhere({ title: name });

    tracks.fetch({
      success: this.tracksLoaded.bind(this)
    });
  },

  tracksLoaded: function(tracks) {
    var tracks_modal = new TracksView({
      collection: tracks,
      album: this.selected_album.toJSON()
    });
    tracks_modal.render();
    this.tracks = tracks_modal;
  },

  albumsLoaded: function() {
    this.view.render();
  }
};

var Router = Backbone.Router.extend({
  routes: {
    "albums/:name": "getAlbum"
  },

  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  },

  index: function() {
    if ( !App.tracks.$el.is(":animated") ) {
      App.tracks.fadeOut();
    }
  },

  getAlbum: function(name) {
    console.log(name);
    App.fetchTracks(name);
  }
});

var router = new Router();

Backbone.history.start({
  pushState: true,
  silent: true
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true});
});
