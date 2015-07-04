var pathName = process.argv[2],
  extension = process.argv[3],
  fs = require('fs');

fs.readdir(pathName, callback);

function callback (err, list) {
  console.log(list.filter(function (filename) {
    return filename.match("." + extension);
  }).join('\n'));
}
