const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res) {
  let url = req.url;

  if(url === '/') {
    url = '/index.html';
  }

  // 시험 X
  if(url === '/favicon.ico') {
    return res.writeHead(404);
  }

  res.writeHead(200);
  // __dirname : 경로
  // __dirname : 'C:\Node.js수업\index.html + url : /index.html
  // fs.readFileSync() : 동기함수 비동기로
  const htmlCode = fs.readFileSync(__dirname + url);
  console.log(htmlCode);
  res.end(htmlCode);
});

app.listen(3333);