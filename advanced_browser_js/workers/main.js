$("form").on("submit", function() {
  var number = $("#numbers").val().replace(/\n/g, '');
  var digits = $("#digits").val();

  var productWorker = new Worker('worker.js');
  productWorker.addEventListener('message', function(e) {
    $("#result").html("The biggest number is: " + e.data);
  }, false);

  productWorker.postMessage({number: number, digits: digits});
});
