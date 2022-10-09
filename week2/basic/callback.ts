// 콜백함수를 통해 비동기 처리를 할 경우
console.log("Ready ...");

setTimeout((): void => {
  console.log("Set ...");
}, 3000);

console.log("Go !");

// 결과: Ready, Go가 바로 찍히고 3초 뒤에 Set이 찍힌다.

// 콜백함수는 많이 쓰게 되면 콜백지옥 생긴다 => Promise나 async/await 쓰는게 좋음
