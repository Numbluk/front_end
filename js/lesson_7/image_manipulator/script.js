$(window).load(function() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  var manipulator = {
    data: [],
    images: $("img"),
    init: function() {
      this.images.each(function() {
        var curr_img = this;
        manipulator.drawToCanvas(curr_img);
        manipulator.toGrayscale(curr_img);
        manipulator.writeImage();
      });
    },
    drawToCanvas: function(img) {
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
    },
    getData: function(img) {
      return ctx.getImageData(0, 0, img.width, img.height);
    },
    toGrayscale: function(img) {
      var image_data = this.getData(img);
      console.log(image_data.data.length);
      var gray_data;

      for(var i = 0, len = image_data.data.length; i < len ; i += 4) {
        gray_data = (image_data.data[i] * 0.3086 + image_data.data[i + 1] * 0.6094 + image_data.data[i + 2] * 0.0820);

        image_data.data[i] = gray_data;
        image_data.data[i + 1] = gray_data;
        image_data.data[i + 2] = gray_data;
      }

      ctx.putImageData(image_data, 0, 0);
    },
    writeImage: function() {
      var img = document.createElement("img");
      img.src = canvas.toDataURL();
      console.log(img);
      $(document.body).append(img);
    }
  };

  manipulator.init();
});
