var http = require('http');

http.get(process.argv[2], function (response) {
  var str = '',
    charCount = 0;

  response.setEncoding('utf8');
  response.on('data', function (data) {
    str += data;
    charCount += data.length;
  });

  response.on('end', function () {
    console.log(charCount);
    console.log(str);
  });
});