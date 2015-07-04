var http = require('http'),
  bl = require('bl'),
  result = Array(),
  count = 0,
  i;

for (i = 0; i <= 2; i++) {
  getUrls(process.argv[i + 2], i);
}

function getUrls (url, idx) {
  http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }

      result[idx] = data.toString();

      count += 1;

      if (count === 3) {
        printResults();
      }
    }));
  });
}

function printResults () {
  var idx;

  for (idx = 0; idx < 3; idx++) {
    console.log(result[idx]);
  }
}