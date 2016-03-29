// window.location.reload();

// window.location.assign("http://www.google.com");
// // or
// location = "http://www.google.com";

// history.go(-1);
// // or
// history.back();

// location = "https://www.google.com/finance?q=NASDAQ%3AAAPL";
// var beginning = location.search.indexOf('A'),
//     ticker = location.substr(beginning);

// var unused_width = window.screen.width - document.body.clientWidth;
// var unused_height = window.screen.height - document.body.clientHeight;
//
// window.scrollTo(0, document.body.scrollHeight);

var params = {
  tab: 4,
  category: "Javascript",
  comment: "In vel erat non felis congue posuere in non velit. Etiam venenatis tincidunt metus et feugiat. Morbi vehicula malesuada nulla vel&oops= faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris faucibus efficitur diam, in pellentesque urna consequat at."
};

var query_str = '?';

// for ( var prop in params ) {
//   if ( params[prop].toString().indexOf(' ') !== -1 ) {
//     query_str += prop.toString() + '=' + params[prop].replace(/ /g, '+');
//   } else {
//     query_str += prop.toString() + '=' + params[prop];
//   }
//
//   var last_prop = Object.keys(params)[Object.keys(params).length - 1];
//   query_str += (prop == last_prop) ? '' : '&';
// }
// console.log(query_str);

for ( var prop in params ) {
  query_str += prop + '=' + window.encodeURIComponent(params[prop]) + '&';
}

query_str = query_str.replace(/&$/, '');

location = "http://du8ne471zajid.cloudfront.net/exercises/window/7.html/" + query_str;
