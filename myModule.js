module.exports = function myFilteredLsModule (dirName, extension, callback) {
  var fs = require('fs'),
    data,
    err;

  fs.readdir(dirName, function readdirCallback (err, data) {
    if (err) {
      return callback(err);
    }

    var result = data.filter(function (filename) {
      return filename.match('.' + extension);
    });

    callback(null, result);
  });
};