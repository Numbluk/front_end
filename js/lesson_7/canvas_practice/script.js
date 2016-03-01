$(document).ready(function() {
  var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d");

  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  // var colors = ["#000", "#003", "#006", "#009", "#00c", "#00f"];
  //
  // function draw() {
  //   colors.forEach(function(color, index) {
  //     ctx.fillStyle = color;
  //     ctx.fillRect(index * 20, index * 20, canvas.width - index * 40, canvas.height - index * 40);
  //   });
  //   colors.unshift(colors.pop());
  // }
  //
  // setTimeout(draw(), 200);

  var x = canvas.width / 2,
      y = canvas.height / 2,
      radius = x;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "rgba(0, 102, 204, .7)";
  ctx.moveTo(x, y - 50);
  ctx.lineTo(x + 50, y);
  ctx.lineTo(x - 50, y);
  ctx.lineTo(x, y - 50);
  ctx.stroke();
  ctx.closePath();
});
