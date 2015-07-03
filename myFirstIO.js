var fs = require('fs'),
  filename = process.argv[2],
  buf = fs.readFileSync(filename);

console.log(buf.toString().split('\n').length - 1);