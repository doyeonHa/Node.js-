const str = "Hello world";

console.log(str.length); // 11(띄어쓰기 포함)

console.log(str.slice(1, 5)); // 'ello'
console.log(str.slice(1)); // 'ello world'
console.log(str.slice(-2)); // 'ld'

// 문자열 대체
a = str.replace('world', 'everyone'); // 'Hello everyone'
console.log(a);

// 대소문자 변환(본체 변화X)
console.log(str.toUpperCase()); // 'HELLO WORLD'
console.log(str.toLowerCase()); // 'hello world'

// 문자열 포함여부
console.log(str.includes('world')); // true
console.log(str.includes('hello')); // false(h가 대문지 이어야 함)


console.log(str);