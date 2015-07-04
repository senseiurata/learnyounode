var myModule = require('./myModule.js');

myModule(process.argv[2], process.argv[3], function (err, data) {
  if (err) {
  	return printData(err);
  }

  printData(null, data);
});

function printData (err, data) {
  if (!err) {
    console.log(data.join('\n'));
  }
}
