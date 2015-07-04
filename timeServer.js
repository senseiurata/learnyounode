var net = require('net');
var server = net.createServer(function (socket) {
  var now = new Date();

  socket.write(
    now.getFullYear() + '-' +
    padZero(now.getMonth() + 1) + '-' +
    padZero(now.getDate()) + ' ' +
    padZero(now.getHours()) + ':' +
    padZero(now.getMinutes())
  );

  socket.end();

  function padZero (num) {
    if (num.toString().length >= 2) {
      return num.toString();
    }

    return '0' + num.toString();
  }
});

server.listen(+process.argv[2]);