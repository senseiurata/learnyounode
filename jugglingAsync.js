var http = require('http'),
  concatStream = require('concat-stream');

getResponse(process.argv[2], function () {
  getResponse(process.argv[3], function () {
    getResponse(process.argv[4], function () {

    });
  });
});

function getResponse (url, callback) {
  http.get(url, function (response) {
    response.pipe(concatStream(function (data) {
      console.log(data.toString());

      callback();
    }));
  });
}
