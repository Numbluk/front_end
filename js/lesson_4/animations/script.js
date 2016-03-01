// $(document).ready(function() {
//   var shapes = []
//
//   $("#add").on("click", function() {
//
//     var input_type = $("input[type='radio']").filter(":checked").val();
//     if (include(input_type, shapes)) {
//       shapes.forEach(function(shape) {
//         if(shape.type == input_type) {
//             shape.start_x = $("#start_x").val();
//             shape.start_y = $("#start_y").val();
//             shape.end_x = $("#end_x").val();
//             shape.end_y = $("#end_y").val();
//         }
//       })
//     } else {
//       shapes.push({
//         type: input_type,
//         start_x: $("#start_x").val(),
//         start_y: $("#start_y").val(),
//         end_x: $("#end_x").val(),
//         end_y: $("#end_y").val()
//       })
//     }
//
//     $("form")[0].reset();
//   });
//
//   $("#start").on("click", function(event) {
//     event.preventDefault();
//     $("#stop").trigger("click");
//
//     setAtBeginning(shapes);
//     animateTo(shapes);
//   });
//
//   $("#stop").on("click", function(event) {
//     event.preventDefault();
//     shapes.forEach(function(item) {
//       $(item).stop();
//     })
//   })
//
//   function include(type, arr) {
//     arr.forEach(function(item) {
//       if(type == item["type"]) {
//         return true;
//       }
//     })
//     return false;
//   }
//
//   function setAtBeginning(arr) {
//     arr.forEach(function(item) {
//       var $new_shape = $("#" + item.type).show();
//       $new_shape.css({
//         left: item.start_x + "px",
//         top: item.start_y + "px"
//       });
//     })
//   }
//
//   function animateTo(arr) {
//     var items = $("#canvas > div");
//     arr.forEach(function(shape) {
//       for(var i = 0; i < items.length; i++) {
//         item = items.eq(i);
//         console.log(item);
//         if(item[0].type == $(shape).attr("id")) {
//           item.animate({
//             left: shape.end_x + "px",
//             top: shape.end_y + "px"
//           });
//         }
//       }
//     })
//   }
// });

$(document).ready(function() {
  var $canvas = $("#canvas");

  function getFormObject($form) {
    var object = {};

    $form.serializeArray().forEach(function(input) {
      object[input.name] = input.value;
    });

    return object;
  }

  function createElement(data) {
    console.log(data.shape);
    var $div = $("<div />", {
      "class": data.shape,
      data: data
    });

    resetElement($div);

    return $div;
  }

  function animateElement() {
    var $element = $(this),
    data = $element.data();
    resetElement($element);

    $element.animate({
      left: +data.end_x,
      top: +data.end_y
    }, 1000);

  }

  function resetElement($element) {
    var data = $element.data;

    $element.css({
      left: +data.start_x,
      top: +data.start_y
    });
  }

  function stopAnimations() {
    $canvas.find("div").stop();
  }

  $("form").on("submit", function(event) {
    event.preventDefault();
    var $form = $(this),
        data = getFormObject($form);

    $canvas.append(createElement(data));
  });

  $("#start").on("click", function(event) {
    event.preventDefault();

    $canvas.find("div").each(animateElement);
  });
});
