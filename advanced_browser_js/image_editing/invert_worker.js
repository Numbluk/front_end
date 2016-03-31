omessage = function(e) {
  console.log('hello');
  var data = e.data.image_data.data;

  for( var i = 0; i < data.length; i += 4) {
    for (var j = 0; j < 3; j++) {
      data[i + j] = 255 - data[i + j];
    }
  }

  postMessage(e.data);
};
