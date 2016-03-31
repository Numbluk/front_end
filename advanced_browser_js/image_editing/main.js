$(window).load(function() {
  var context = $("canvas")[0].getContext("2d");
  var img = $("img").remove().get(0);
  var last_data;

  $("canvas").height(img.height);
  $("canvas").width(img.width);

  context.drawImage(img, 0, 0);
  last_data = getData(context);

  var workers = {
    brightness: new Worker("brightness_worker.js"),
    saturation: new Worker("saturation_worker.js"),
    invert: new Worker("invert_worker.js"),
    horiz_flip: new Worker("horiz_flip_worker.js"),
    vert_flip: new Worker("vert_flip_worker.js")
  };

  for ( var prop in workers ) {
    workers[prop].addEventListener("message", function(message) {
      putData(context, message.data.image_data);
    });
  }

  $("ul").on("click", "a", function(e) {
    e.preventDefault();
    var data = { image_data: getData(context )},
        worker = workers[$(e.target).attr("data-method")];

    worker.postMessage(data);
    worker.addEventListener("message", function(message) {
      last_data = message.data.image_data;
      worker.removeEventListener("message", message);
    });
  });

  $("input[type=range]").on("input", function() {
    var $curr = $(this);

    $curr.next("span").text($curr.val() + "%");

    workers[$curr.attr("name")].postMessage({
      image_data: last_data,
      value: $curr.val()
    });
  });

  function getData(context) {
    return context.getImageData(0, 0, context.canvas.width, context.canvas.height);
  }

  function putData(context, data) {
    context.putImageData(data, 0, 0);
  }

});
