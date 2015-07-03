var fs = require('fs'),
  filename = process.argv[2],
  buf = fs.readFile(filename, callback);

function callback (err, data) {
  console.log(data.toString().split('\n').length - 1);
}
