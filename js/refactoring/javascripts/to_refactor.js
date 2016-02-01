$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").show();
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").hide();
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });


  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
  });

  function sumOddEven(cc_number) {
    var odd_total = 0,
        even_total = 0;

    cc_number = cc_number.split("").reverse();
    for (var i = 0, len = cc_number.length; i < len; i++) {
      if (i % 2 == 1) {
        cc_number[i] = (+cc_number[i] * 2) + "";
        if (cc_number[i].length > 1) {
          cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
        }
        else {
          cc_number[i] = +cc_number[i];
        }
        odd_total += cc_number[i];
      }
      else {
        even_total += +cc_number[i];
      }
    }

    return (odd_total + even_total);
  }

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val();
    var total_odd_even = sumOddEven(cc_number);

    if ((total_odd_even) % 10 == 0) {
      $(this).find(".success").toggle();
    }
    else {
      $(this).find(".error").toggle();
    }
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
        $stone = $("#birthstone");
    console.log(month);

    var birthstone = {
      january: "garnet",
      february: "amethyst",
      march: "aquamarine or bloodstone",
      april: "diamond",
      may: "emerald",
      june: "pearl, moonstone, or alexandrite",
      july: "ruby",
      august: "peridot",
      september: "sapphire",
      october: "tourmaline",
      november: "topac or citrine",
      december: "turquoise, zircon, or tanzanite"
    }

    $stone.text("Your birthstone is " + birthstone[month.toLowerCase()]);
  });
});
