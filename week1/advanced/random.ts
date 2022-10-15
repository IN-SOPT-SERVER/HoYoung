/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

interface Member {
  name: string;
  group: string;
}

interface Dinner {
  member: Member[];
  shuffle(array: Member[]): Member[];
  organize(array: Member[]): void;
}

const dinner: Dinner = {
  member: [
    {
      name: "권세훈",
      group: "ob",
    },
    {
      name: "천호영",
      group: "yb",
    },
    {
      name: "이종현",
      group: "yb",
    },
  ],
  shuffle(array: Member[]) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array: Member[]) {
    let dinnerMember = this.shuffle(array).map((member: Member) => member.name);
    console.log(`결과 ${dinnerMember[0]}, ${dinnerMember[1]}`);
  },
};

dinner.organize(dinner.member);
