const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res) {
  console.log(req.url);
  // 초기값 설정
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/') {
    // 스트리밍 방식으로 index의 html 코드들을 전송 (대용량 처리에 유리)
    // 파일입출력 : 파일을 한꺼번에 처리함
    // 스트림 : 파일을 부분적으로 나눠서 실시간으로 처리함
    // pipe(관) -> 하나의 관을 만들어준다

     // createReadStream(경로, 옵션) : 데이터를 읽을 수 있는 스트림
    // pipe(관) : 시작점이 되는 stream이 데이터를 모두 불러와서 종료되면, 목적지 stream의 end메서드를 호출하면서 종료시켜준다.
    fs.createReadStream(path.join(__dirname, 'html', 'index.html')).pipe(res);
  } else if(req.url === '/food') {
    fs.createReadStream(path.join(__dirname, 'html', 'food.html')).pipe(res);
  } else {
    fs.createReadStream(path.join(__dirname, 'html', '404.html')).pipe(res);
  }
});

server.listen(3333);