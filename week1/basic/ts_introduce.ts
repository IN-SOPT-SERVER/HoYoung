// 기본적인 문법
const isLiked: boolean = true;
console.log(`${typeof isLiked}, ${isLiked}`); // boolean, true

const str: string = "helloooo!";
console.log(`${typeof str}, ${str}`); // string, helloooo!

let num: number = 31;
console.log(`${typeof num}, ${num}`); // number, 31

// const sum: number = "sum number"; // type이 맞지 않아 에러 발생

// 배열 타입 표현
let numbers: number[] = [1, 2, 3];

const strings: Array<String> = ["hi", "hello"];

// Object가 object보다 더 엄격한 타입이다
const objArray1: Object[] = [{ item1: "oh" }, { item2: "wow" }];
const objArray2: object[] = [{ item1: "oh" }, { item2: "wow" }];

// 함수 타입 표현
let name2 = "천호영";
const fun = (name: string): void => console.log(`hello, ${name2}!`);
const sum3 = (a: number, b: number): number => a + b;
const sum4 = (a: number, b: number): number => {
  return a + b;
};

// null, undefined의 타입 표현
const a: null = null;
//let oops: num = 2; // null 타입만 할당 가능
let b: undefined = undefined;
// let c: undefined = null; // undefined 타입만 할당 가능

// 타입 단언
//* angle-bracket
let str2: any = "천호영";
let strLength: number = (<string>str).length;
console.log(`${typeof strLength}, ${strLength}`); // number, 3

//* as
let str3: any = "천호영";
let str3Length: number = (str3 as string).length;
console.log(`${typeof str3Length}, ${str3Length}`); // number, 3

// any 남발하면 애니스크립트
const hmmm: any = {
  name: "천호영",
  age: 20,
  isSopt: true,
};

// 인터페이스
interface Sopt {
  name: string;
  age: number;
  isSopt: boolean;
}

const info2: Sopt = {
  name: "천호영",
  age: 20,
  isSopt: true,
  // money: null, // interface에 없어서 불가
};

// 배열 타입에도 인터페이스 적용 가능
const infos: Sopt[] = [
  {
    name: "천호영",
    age: 20,
    isSopt: true,
  },
  {
    name: "이근우",
    age: 20,
    isSopt: false,
  },
];

// 선택적 프로퍼티
interface Sopt2 {
  name: string;
  age: number;
  isSopt?: boolean;
}

const info3: Sopt2 = {
  name: "천호영",
  age: 20,
};

// 이벤트 기반 node.js
const sayHello = () => console.log("Hello");

const timer = () => {
  return setTimeout(() => {
    console.log("End !");
  }, 3000);
};

sayHello();
timer();
