/*
JavaScript에서 false로 처리되는 값들
null, NaN, 0, 빈 문자열("", '', ``), undefined, false
*/

// const a = 30;
// console.log(a);
// a = 10;    에러 const는 값을 바꿀 수 없다


//함수
function add(n1, n2) {
    return n1+n2;
}

result = add(1, 2);
console.log(result)

plus = add;
result = plus(3, 4);
console.log(result);

sub = function(n1, n2) {
    return n1-n2;
}

result = sub(3, 2);
console.log(result)