module.exports = function myFilteredLsModule (dirName, extension, callback) {
  var fs = require('fs'),
    data,
    err;

  data = fs.readdir(dirName, function readdirCallback (err, data) {
    data.filter(function (filename) {
    	console.log(filename);
      return filename.match('.' + extension);
    })
  });

  callback(err, data);
}