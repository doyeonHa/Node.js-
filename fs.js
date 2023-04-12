// 해당 경로에 있는 파일 목록의 배열을 반환
const files = fs.readdirSync(__dirname);
console.log(files);


// \\ : \
// 특정파일의 전체(절대)경로
// result = __dirname + '\\' + files[1]
// 문자열 합치는 것보다 join을 사용하는 것을 권장 (경로방식을 운영체제에 맞춰서 처리해 줌)
result = __dirname + '\\' + files[1]
console.log(result);

/// 해당 파일에 대한 정보를 알 수 있음
console.log(fs.statSync(result).isFile());      // true
console.log(fs.statSync(result).isDirectory()); // false