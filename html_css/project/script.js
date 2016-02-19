$(window).load(function() {
  // Add item
  $("section #new_item").on("click", function(event) {
    event.preventDefault();

    // Make new item
    var $new_item = $("#hidden_item").clone().removeAttr("id");
    $new_item.appendTo("ul#main_list").show();

    $(".modal, .modal_layer").show();

    // Get and set data inputted
    $("form").on("click", "input#save", function(event) {
      event.preventDefault();
      var $modal = $(".modal");
      var $item = $("ul#main_list > li:last-of-type");

      var title = $modal.find("#title").val(),
          day = $modal.find("#day").val(),
          month= $modal.find("#month").val(),
          year = $modal.find("#year").val();
          // description = $("#description").val();

      var $data = $item.find("ul.data");

      $item.find("a.item label").append(title);
      $item.find("p.day").prepend(day);
      $data.find("p.month").prepend(month);
      $data.find("p.year").append(year);
      // Why does this work and not description?
      $data.find("p.data_description").prepend($("#description").val());

      $("form").trigger("reset");
      $(".modal, .modal_layer").hide();
    });


    $("form").on("click", "input#finished", function(event) {
      event.preventDefault();

      $(this).find("label").addClass("finished");
      $(".modal, .modal_layer").hide();
    });
  })

  // Modify item
  $("section").on("click", ".item", function(event) {
    event.preventDefault();
    $current_item = $(this).parent("li");
    $data = $(this).siblings(".data");
    console.log($current_item);
    console.log($data);

    // Populate modal
    $(".modal .title input").val($current_item.find(".item label").text());
    $(".modal #day").val($data.find("p.day").text().slice(0,-1));
    $(".modal #month").val($data.find("p.month").text().slice(0,-1));
    $(".modal #year").val($data.find("p.year").text());
    $(".modal #description").text($data.find("p.data_description").text());

    $(".modal, .modal_layer").show();

    // Get and set data inputted
    $("form").on("click", "input#save", function(event) {
      event.preventDefault();
      var $modal = $(".modal");

      var title = $modal.find("#title").val(),
          day = $modal.find("#day").val(),
          month= $modal.find("#month").val(),
          year = $modal.find("#year").val();
          // description = $("#description").val();

      var $data = $current_item.find("ul.data");

      $current_item.find("a.item label").text(title);
      $current_item.find("p.day").prepend(day);
      $data.find("p.month").prepend(month);
      $data.find("p.year").append(year);
      // Why does this work and not description?
      $data.find("p.data_description").text($("#description").val());

      // $("form").trigger("reset");
      $(".modal, .modal_layer").hide();
    });


    $("form").on("click", "input#finished", function(event) {
      event.preventDefault();

      $current_item.find("label").addClass("finished");
      $(".modal, .modal_layer").hide();
    });
  })

  // Display data
  $("ul#main_list").on("click", "li", function(event) {
    $(this).find('.data').toggle(200);
  });

  // Mark something finished

  // Delete a row
  $("main").on("click", "a.delete", function(event) {
    event.preventDefault();

    $(this).parent("li").remove();
  });

  /* Toggle Hamburger/Aside Accordion */
  $("#hamburger").on("click", function(event) {
    event.preventDefault();
    if ($(window).width() > 800) {
      var has_collapsed = $("aside").hasClass("collapsed");

      if (has_collapsed === true) {
        $("aside").animate( {'margin-left': '0' }, 200);
        $("aside").removeClass("collapsed");
        $("main section").animate({"width": "86.127%"}, 200 );
        $("main").animate({ "width": "70%" }, 200);
      } else {
        $("aside").animate( {'margin-left': '-27.917%' }, 200);
        $("aside").addClass("collapsed");
        $("main section").animate({"width": "100%"}, 200);
        $("main").animate( {"width": "95%"}, 200 ); // 750 / 865
      }
    } else {
      if($("aside").css("margin-left")  === "-27.917%") {
        $("aside").animate( {'margin-left': '0' }, 200);
        $("aside").removeClass("collapsed");
      }

      var has_collapsed = $("aside").hasClass("collapsed");

      if (has_collapsed === false) {
        $("aside").addClass("animate_aside");
        $("#hamburger").addClass("animate_hamburger");
        $("aside").addClass("collapsed");
      } else {
        $("aside").removeClass("animate_aside");
        $("#hamburger").removeClass("animate_hamburger");
        $("aside").removeClass("collapsed");
      }
    }

  });
});
