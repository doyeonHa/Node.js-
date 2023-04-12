const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res) {
  let url = req.url; // 문자열 형태
  // 문자열 형태의  _url을 object형태로 변환
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if(pathname === '/') {
    if(queryData == undefined) {
      res.writeHead(200);
      res.end("undefined");
    } else {
      // description : readFile을 통해 읽어온 실제 내용
      fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description) {
        const title = queryData.id;
        const template = `
        <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB1 - ${title}</title>
</head>
<body>
    <ul>
        <li><a href="/?id=HTML"></a></li>
        <li><a href="/?id=CSS"></a></li>
        <li><a href="/?id=JavaScript"></a></li>
    </ul>
    <h2>${title}</h2>
    <p>${description}</p>
</body>
</html>
        `
        res.writeHead(200);
        res.end(template);
      });
    }
  }
  res.end(queryData.id);
});

app.listen(3333);