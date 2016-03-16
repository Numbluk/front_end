$(document).ready(function() {
  function Todo(id, title, info) {
    this.id = id;
    this.title = title;
    this.info = info;
    this.due_date = "No Due Date";
    this.finished = false;
  };

  // If localStorage does not have a collection of todos yet, then set the
  // todos_by_month to an empty object
  if (localStorage.getItem("allTodosObject")) {
    todos_by_month = JSON.parse(localStorage.getItem("allTodosObject"));
    todo_count = totalTodos();
  } else {
    var todo_count = 0;
    var todos_by_month = {
      "No Due Date": []
    };
  }

  // Sort todos in todos_by_month by completed
  function sortTodos() {
    for (var date in todos_by_month) {
      todos_by_month[date].sort(function(a, b) {
        return a.finished - b.finished;
      });
    }
  }

  // Hamburger actions
  if ($("#hamburger").is(":visible")) {
    $("#hamburger").on("click", function(event) {
      event.preventDefault();
      if (!$("aside").is(":visible")) {
        $("aside").toggleClass("fixed").show();
        $(".sidebar_background").toggleClass("fixed_background").show();
      } else {
        $("aside").toggleClass("fixed").hide();
        $(".sidebar_background").toggleClass("fixed_background").hide();
      }
      $("#hamburger").toggleClass("position_hamburger_abs");
      $("main h1").toggleClass("hamburger-padding");
    });
  }

  // Gets total number of todos
  function totalTodos() {
    var total = 0;
    for (var month in todos_by_month) {
      total += todos_by_month[month].length;
    }
    return total;
  }

  // Update Storage
  var updateStorage = function() {
    localStorage.setItem("allTodosObject", JSON.stringify(todos_by_month));
  };

  // assignTodo: adds a todo to todos_by_month (if a month hasn't been added then it will) && updates storage
  var assignTodo = function(todo) {
    var month = todo.due_date;
    if (month != "No Due Date") {
      // Add todo to a month if month exists
      // Otherwise add month first and then add todo
      if (todos_by_month.hasOwnProperty(month)) {
        todos_by_month[month].push(todo);
      } else {
        todos_by_month[month] = [];
        todos_by_month[month].push(todo);
      }
    } else {
      todos_by_month["No Due Date"].push(todo);
    }
    updateStorage();
  };

  // getTodo: returns Todo object if there is on
  var getTodo = function(id_num) {
    for(var date in todos_by_month) {
      for(var i = 0; i < todos_by_month[date].length; i++) {
        if(todos_by_month[date][i].id  == id_num) {
          return todos_by_month[date][i];
        }
      }
    }
    return;
  };

  // removeTodo: removes Todo object if there is one
  var removeTodo = function(id_num) {
    for(var date in todos_by_month) {
      for(var i = 0; i < todos_by_month[date].length; i++) {
        if(todos_by_month[date][i].id  == id_num) {
          var obj_deleted = todos_by_month[date].splice(i, 1);
          updateStorage();
          return obj_deleted;
        }
      }
    }
    return;
  };

  // getUnfinishedByMonth: gets number of unfinished todos by month
  function getUnfinishedByMonth(month) {
    var count = 0;
    var todos_list = todos_by_month[month];
    for(var i = 0; i < todos_list.length; i++) {
      if (todos_list[i].finished == false) { count++; }
    }
    return count;
  }

  // getAllUnfinished: returns total number of unfinished todos
  function getAllUnfinished() {
    var total = 0;
    for(var month in todos_by_month) {
      total += getUnfinishedByMonth(month);
    }
    return total;
  }

  // Todos template
  var todo_list_source = $("#todo_list").html();
  var todo_list_template = Handlebars.compile(todo_list_source);

  // Template for list of dates that are unfinished
  var unfinished_aside_template = Handlebars.compile($("#unfinished_aside").html());

  Handlebars.registerHelper("getUnfinished", function(lists) {
      return getUnfinishedByMonth(lists);
  });

  // Template for list of dates that are finished
  var finished_aside_template = Handlebars.compile($("#finished_aside").html());

  function display(month) {
    sortTodos();
    var unfinished_dates = getUnfinishedDates();
    $("ul#unfinished").html(unfinished_aside_template({date: unfinished_dates}));

    var finished_dates = getFinishedDates();
    $("ul#finished").html(finished_aside_template({date: finished_dates}));

    $("h1 span#header_date").text(month);
    $("h1 span#left_on_page").text(getUnfinishedByMonth(month));
    $("span#all_todos_left").text(getAllUnfinished());
    $("ul.todos").html(todo_list_template({todos: todos_by_month[month]}));
  }

  display("No Due Date");

  // Add a new todo. Default: "No Due Date"
  $("a#new_todo").on("click", function(event) {
    event.preventDefault();
    var temp_todo = new Todo(todo_count, "Title");
    assignTodo(temp_todo);
    display("No Due Date");
    todo_count++;
  });

  // Delete a todo
  $("ul.todos").on("click", ".trashcan", function(event) {
    event.preventDefault();
    var $list_to_delete = $(this).closest("li");
    $list_to_delete.remove();
    removeTodo($list_to_delete.attr("id"));
    display(getCurrentMonthHeader());
  });

  // Toggle complete with checkbox
  $("ul.todos").on("click", "input", function(e) {
    e.stopPropagation();
    $target_todo = $(this).closest("li");
    getTodo($target_todo.attr("id")).finished = true;
    $target_todo.find("span").toggleClass("complete");
    updateStorage();
    display($target_todo[0].dataset.month);
  });

  function toggleModal() {
    $("#modal").toggle();
    $("#modal_background").toggle();
  }

  // Returns current month of the content from the header
  function getCurrentMonthHeader() {
    var text = $("h1 span#header_date").text();
    return text;
  }

  var current_id = 0;
  var $current_span;

  // Bring up modal on list name click
  $("ul.todos").on("click", "span.name", function(event) {
    current_id = $(this).parent().attr("id");
    $current_span = $(this);
    console.log($current_span);
    var $current_month = $current_span.closest("li")[0].dataset.month;
    toggleModal();
  });

  // Save information in modal to todo
  $("form").on("click", "#save", function(event) {
    console.log(current_id);
    console.log($current_span);
    var data = $("form").serializeArray();
    var todo = removeTodo(current_id)[0];
    console.log(todo);
    todo.title = data[0].value

    var month = data[2].value;
    var year = data[3].value;
    if(month && year) {
      if (month.length == 1) { month = "0" + month; } // Date formatting
      if (year.length == 4) { year = year.substr(2, 2); }
      todo.due_date = month + "/" + year;
    }

    $current_span.closest("ul").after("<h4 id='update'>Update complete! Now due on: " + month + "/" + year + "</h4>");

    assignTodo(todo);
    $("#modal").hide();
    $("#modal_background").hide();
    $("form").trigger("reset");
    display(getCurrentMonthHeader());
  });

  // Mark todo complete
  $("#modal").on("click", "#mark_complete", function(e) {
    console.log(current_id);
    console.log(getTodo(current_id));
    console.log($current_span);
    getTodo(current_id).finished = true;
    $current_span.closest("li").find("input").trigger("click");
    // Why does toggleModal() not bind the event here after the first todo
    // is marked as complete?
    $("#modal").hide();
    $("#modal_background").hide();
    updateStorage();
    display(getCurrentMonthHeader());
  });


  // Close modal by clicking off
  $("#modal_background").on("click", function() {
    toggleModal();
  });

  // - getFinishedDates: returns array of dates whose todos are completely finished to put into template to display
  function isDateFinished(date) {
    var todo_list = todos_by_month[date];
    for(var i = 0; i < todo_list.length; i++) {
      if (todo_list[i].finished == false) { return false; }
    }
    return true;
  }

  function getFinishedDates() {
    var finished_dates = [];
    for(var date in todos_by_month) {
      if (isDateFinished(date)) { finished_dates.push(date); }
    }
    return finished_dates;
  }

  function getUnfinishedDates() {
    var unfinished_dates = [];
    for (var date in todos_by_month) {
      if (!isDateFinished(date)) { unfinished_dates.push(date); }
    }
    return unfinished_dates;
  }

  $("ul#unfinished, ul#finished").on("click", "a", function(e) {
    e.preventDefault();
    //Grab date
    var date = $(this).find("span.date").text();

    // Display todos with templates
    display(date);
  });
});
