onmessage = function(app_data) {
  var data = app_data.data.image_data.data,
      brightness  = Math.floor(255 * +app_data.data.value / 100);

  for ( var i = 0, len = data.length; i < len; i += 4) {
    data[i] += brightness;
    data[i + 1] += brightness;
    data[i + 2] += brightness;
  }

  postMessage(app_data.data);
};
