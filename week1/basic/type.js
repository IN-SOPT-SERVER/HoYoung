myName = "천호영";
// ES6부터 지원하는 Template literal
console.log(`${myName} 입니다.`);

// Symbol은 고유하고 변경이 불가능한 원시 값
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol("foo");
const sym4 = Symbol("foo");

console.log(sym1 === sym1); // true
console.log(sym1 === sym2); // false
console.log(sym3 === sym4); // false

// {}로 감싸진 Object 타입
const user = {
  email: "ho723@naver.com",
  name: "천호영",
  favorites: ["마라탕", "칭따오"],
  introduce: function () {
    console.log(`${this.name}입니다. ${this.favorites} 좋아`);
  },
  getFavoriteFoods() {
    this.favorites.forEach((food) => {
      console.log(`${food} 맛있어`);
    });
  },
};
user.getFavoriteFoods();

// Array도 JS에서 객체 타입
const arr1 = ["Hi", 10, true];
const arr2 = Array(1, null, "우와!", false, { sopt: "Server" });

arr1.map((item) => console.log("item1: ", item));
arr2.map((item) => console.log("item2: ", item));

// Function: JS에서 특별한 구조가 아닌 특별한 종류의 값으로 인식
// * 함수 선언식(호이스팅의 영향을 받음)
function sum(a, b) {
  return a + b;
}

//* 함수 표현식(호이스팅의 영향을 받지 않음 => 정확히는 TDZ 생김)
const sum2 = (a, b) => {
  return a + b;
};

// 로직이 한 줄이면 return 생략 가능하고, 파라미터 하나인 경우 소괄호도 생략 가능
const add = (a, b) => a + b;
const hello = (name) => console.log(`${name} hello!`);
const info = (name, age) => ({ name, age });

console.log(info(44, 55));
