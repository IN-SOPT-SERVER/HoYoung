const me = (callback: () => void, time: number) => {
  setTimeout(callback, time);
};

// *기상
const wakeUp = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    me(() => {
      console.log("[현재] 기상!");
      resolve("기상");
    }, 3000);
  });
};

const goBathRoom = (now: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    me(() => {
      console.log("[현재] 화장실로 이동함");
      resolve(`${now} -> 화장실로 이동`);
    }, 3000);
  });
};

wakeUp()
  .then((now) => goBathRoom(now))
  .then((now) => goBathRoom(now))
  .then((now) => console.log(`\n${now}`));
