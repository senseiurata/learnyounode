var http = require('http'),
  url = require('url'),
  server;

server = http.createServer(function (req, res) {
  var requestUrl = req.url,
    parsedUrl = url.parse(requestUrl, true),
    date = new Date(parsedUrl.query.iso),
    result = {};

  switch (parsedUrl.pathname) {
    case '/api/parsetime':
      result.hour = date.getHours();
      result.minute = date.getMinutes();
      result.second = date.getSeconds();
      break;
    case '/api/unixtime':
      result.unixtime = date.getTime();
      break;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.write(JSON.stringify(result));
  res.end();
});

server.listen(process.argv[2]);