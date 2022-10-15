if (true) {
  var x = "var";
}
console.log("x: ", x); // var는 함수 스코프라 문제 없음

if (true) {
  let y = "let";
}
// console.log("y: ", y); // let은 블록 스코프라 ReferenceError 발생

function func() {
  if (true) {
    var test = "var";
    console.log("test: ", test);
  }
  console.log("test: ", test);
}

func();
// console.log("test: ", test); // function scope 벗어난 곳에서 접근 불가
