var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    var str = data.toString();

    if (err) {
      return console.error(err);
    } else {
      console.log(str.length);
      console.log(str);
    }
  }));
});