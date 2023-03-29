const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res) {
  let url = req.url; // 문자열 형태
  // 문자열 형태의  _url을 object형태로 변환
  let queryData = url.parse(_url, true).query;
  res.end(queryData.id);

});

app.listen(3333);