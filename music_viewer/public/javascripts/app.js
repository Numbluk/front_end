var static = require('node-static');
var http = require('http');

var fileServer = new static.Server('./public');


http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function (err, result) {
          console.log(request.url);
            if (err) { // There was an error serving the file
                console.error("Error serving " + request.url + " - " + err.message);

                // Respond to the client
                response.writeHead(err.status, err.headers);
                response.end();
            }
        });
    }).resume();
}).listen(3000);

var App = {
  init: function() {
    this.fetchAlbums();
  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.albums.fetch({
      success: function() {
        this.albumsLoaded.bind(this);
      }
    });
  },
  albumsLoaded: function() {

  }
};
