//* 파트원을 소개해주는 코드 만들기 실습

/**
 *  ~~는 ~살이고 ~에 살고있고 ~~를 좋아합니다.
 */

// 1. 서버 파트원 2-3명 소개하는 객체 만들기
// 2. 파트원 소개 배열에 타입으로 지정할 인터페이스 생성 및 타입 지정
// 3. 모든 파트원 소개 아래와 같이 출력하기.

interface MemberInfo {
  name: string;
  age: number;
  location: string;
  favoriteFood: string;
  mbti: string;
  maxAlchohol: number;
}

const members: MemberInfo[] = [
  {
    name: "김혜수",
    age: 25,
    location: "공덕",
    favoriteFood: "삼겹살",
    mbti: "estp",
    maxAlchohol: 1,
  },
];

members.forEach((x) => {
  console.log(
    `소개할 파트원 이름은 ${x.name}이고, 나이는 ${x.age}살, 사는 곳은 ${x.location}, 좋아하는 음식은 ${x.favoriteFood}입니다.`
  );
  console.log(
    `mbti는 ${x.mbti}이고, 주량은 ${x.maxAlchohol}잔이라고 하시니 10배하면 ${
      x.maxAlchohol * 10
    }잔이네요.`
  );
});
