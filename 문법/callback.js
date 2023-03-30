function somefunc(callback) {
    console.log("somefunc 실행");

    // somefunc의 기능을 수행하고 난 후에
    // callback()가 실행된다.
    callback();
}

function cb() {
    console.log("콜백함수 실행");
}

somefunc(cb);

// somefunc(function () {
//     console.log("콜백함수 실행");
// });