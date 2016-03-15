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
      "No Due Date": [],
      completed: []
    };
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
      if (todos_by_month[month]) {
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
        console.log(todos_by_month[date][i].id);
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
        console.log(todos_by_month[date][i].id);
        if(todos_by_month[date][i].id  == id_num) {
          var obj_deleted = todos_by_month[date].splice(i, 1);
          updateStorage();
          return obj_deleted;
        }
      }
    }
    return;
  };

  // Todos template
  var todo_list_source = $("#todo_list").html();
  var todo_list_template = Handlebars.compile(todo_list_source);

  // Header template

  function updatePane(todos_by_month) {}

  function display(month) {
    $("ul.todos").html(todo_list_template({todos: todos_by_month[month]}));
  }

    display("No Due Date");

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
    console.log(todos_by_month);
    removeTodo($list_to_delete.attr("id"));
    console.log(todos_by_month);
  });

  // Toggle complete with checkbox
  $("ul.todos").on("click", "input", function(e) {
    e.stopPropagation();
    console.log(this);
    console.log($(this).closest("li").find("span"));
    $(this)
    $(this).closest("li").find("span").toggleClass("complete");
  });

  // getTodosByMonth: gets a group of todos by month
  // var getTodosByMonth = function(month) {
  //   return todos_by_month[month];
  // };
  //
  // var getUnfinishedTodos = function() {
  //
  // };
  //
  // var getFinishedTodos = function() {
  //
  // };

  function toggleModal() {
    $("#modal").toggle();
    $("#modal_background").toggle();
  }

  // Bring up modal on list name click
  $("ul.todos").on("click", "span.name", function(event) {
    toggleModal();
    var id = $(this).parent().attr("id");

    // Save information in modal to todo
    $("#modal #save").on("click", function() {
      var data = $("form").serializeArray();
      var todo = removeTodo(id);

      todo.title = data[0].value

      var month = data[2].value;
      var year = data[3].value.substr(2,2);
      if(month && year) {
        if (month.length == 1) { month = "0" + month; }
        todo.due_date = month + "/" + year;
      }

      assignTodo(todo);
      $("#modal").hide();
      $("#modal_background").hide();
    });

    // Mark todo complete
    $("#modal").on("click", "#mark_complete", function(e) {
      getTodo(id).finished = true;
      display("No Due Date");

      // Why does toggleModal() not bind the event here after the first todo
      // is marked as complete?
      $("#modal").hide();
      $("#modal_background").hide();
    });
  });

  // Close modal by clicking off
  $("#modal_background").on("click", function() {
    toggleModal();
  });


  // Milsetone 3:
  // When a todo is given a date it should be congregated to the list on the left panel that relates to the given month -- DONE?
  // Display:
  // - list of all todos based on left-pane month/date
  // - list of all unfinished months with todos in them (and number left)
  // - list of all finished months with todos in them
  // var unfinished_todos_source = $("#unfinished_todos_template").html();
  // var unfinished_template = Handlebars.compile(unfinished_todos_source);
  // var unfinished_html = unfinished_template(todos_by_month);

  // var todos = ;
  // $("ul.todos");
  // $(".incomplete_todos ul");
  // $(".completed_todos ul");

});
