$(window).load(function() {
  var map = {
    map_url: "https://maps.googleapis.com/maps/api/staticmap?",
    zoom_lvl: 13,
    width: 500,
    height: 400,
    build: function(pos) {
      this.pos = pos;
      this.makeImage();
      console.log(weather.get());
    },
    makeImage: function() {
      coords = this.pos.coords.latitude + "," + this.pos.coords.longitude;
      this.map_url += "center=" + coords;
      this.map_url += "&size=" + this.width + "x" + this.height;
      this.map_url += "&zoom=" + this.zoom_lvl;

      var marker = "&markers=color:blue";
      marker += "%7Csize:mid";
      marker += "%7C" + coords;
      this.map_url += marker;

      var img = "<img src='" + this.map_url + "'>";
      $("#map").html(img);
    },
  };

  var weather = {
    base: "http://api.openweathermap.org/data/2.5/weather",
    template: Handlebars.compile($("#weather_report").html()),
    get: function() {
      console.log(map.pos.coords.latitude);
      var dfd = $.ajax({
        url: this.base,
        method: 'get',
        data: {
          lat: map.pos.coords.latitude,
          lon: map.pos.coords.longitude,
          APPID: "8c2822e87ba844ad00f858b18627b7af"
        },
        dataType: 'json'
      });
      dfd.done(this.render.bind(this));
    },
    processData: function(json) {
      console.log(json);
      return {
        location: json.name,
        temp: kelvinToF(json.main.temp),
        description: json.weather[0].description
      };
    },
    render: function(json) {
      $("#weather").html(this.template(this.processData(json)));
      console.log(this.template);
    }
  };

  function kelvinToF(temp) {
    return (9 / 5 * (temp - 273) + 32).toFixed(1);
  }

  navigator.geolocation.getCurrentPosition(map.build.bind(map));
});
