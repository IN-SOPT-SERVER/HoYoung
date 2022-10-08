const condition: boolean = false;

const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("우와 Promise다!");
  } else {
    reject(new Error("비동기 처리 도중 실패"));
  }
});

//* 비동기 처리 성공(then), 비동기 실패(catch)
promise
  .then((resolvedData): void => console.log(resolvedData))
  .catch((error) => console.log(error));
