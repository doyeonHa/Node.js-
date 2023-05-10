const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res) {
    console.log(req.url);

    res.setHeader('Contetn-type', 'text/html');
    if(req.url == '/') {
        // 스트리밍 방식으로 index의 html 코드들을 전송 (대용량 처리에 유리)
        // 파일입출력 : 파일을 한꺼번에 처리함
        // 스트림 : 파일을 부분적으로 쪼개서 실시간으로 처리함
        fs.createReadStream(path.join(__dirname, 'html', 'index.html')).pipe(res);
    }
});

server.listen(3333);