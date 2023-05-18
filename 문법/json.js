const a = '{"result" : true, "count" : 42}'
console.log(a);   // 문자열

// 문자열을 JSON으로
const obj = JSON.parse(a); // 42
console.log(obj.count); // true
console.log(obj["result"]); // result

// JSON을 문자열로
b = JSON.stringify({x:5, y:6});
console.log(b);
