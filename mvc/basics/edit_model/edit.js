// Given a JSON Object - can be fed into model
// Two handlebars templates to render
// New object on init: datetime, formatted datetime

var templates = {};
$("[type='text/x-handlebars']").each(function() {
    var $template = $(this);
    templates[$template.attr("id")] = Handlebars.compile($template.html());
});

var Product = Backbone.Model.extend({
    setDatetime: function() {
        var date = new Date(this.get("date"));
        var datetime = formatDatetime(date);
        
        this.set("datetime", datetime);
    },
    setDateFormatted: function() {
        var date = new Date(this.get("date"));
        var dateformatted = formatReadableDate(date);
        
        this.set("date_formatted", dateformatted);
    },
    initialize: function() {
        this.setDatetime();
        this.setDateFormatted();
    }
});

var product = new Product(product_json);

function formatDatetime(date) {
    // 2015-95-23T10:30:34
    var datetime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    datetime += "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return datetime; 
}

function formatReadableDate(date) {
    // May 1st, 2015 10:20:20
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var suffix_overrides = ["st", "nd", "rd"];
    var date_suffix = "th";
    var date_formatted;
    
    if (date.getDate() <= suffix_overrides.length) {
        date_suffix = suffix_overrides[date.getDate() - 1];
    }
    date_formatted = months[date.getMonth()] + " " + date.getDate() + date_suffix + ", " + date.getFullYear();
    date_formatted += " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return date_formatted;
}

function renderProduct() {
    $("article").html(templates.product(product.toJSON()));
}

function renderForm() {
    $("fieldset").html(templates.form(product.toJSON()));
}

renderProduct();
renderForm();

$("form").on("submit", function(e) {
    e.preventDefault();
    var inputs = $(this).serializeArray();
    var date = new Date();
    var attrs = {};
    
    inputs.forEach(function(input) {
       attrs[input.name] = input.value; 
    });
    
    attrs.datetime = formatDatetime(date);
    attrs.date_formatted = formatReadableDate(date);
    attrs.date = date.valueOf();
    product.set(attrs);
    renderProduct();
});