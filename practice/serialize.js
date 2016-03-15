
  var form_values = {};

  $("form").on("submit", function(e) {
    e.preventDefault();

    var fields = $(":input, textarea").serializeArray();
    console.log(fields);

    fields.forEach(function(pair) {
      form_values[pair.name] = pair.value;
    });

    localStorage.setItem('form_data', JSON.stringify(form_values));
  })
