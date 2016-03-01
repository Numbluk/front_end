$(document).ready(function() {
  var $blind_divs = $("[id^=blind]");
  var speed = 250;
  var delay = 1500;

  $blind_divs.each(function(index) {
    var $blind = $blind_divs.eq(index);
    $blind.delay(delay * index + speed).animate({
      top:  "+=" + $blind.height(),
      height: 0
    }, speed);
  });
});
