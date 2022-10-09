import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  let memberInfo = [
    {
      name: "천호영",
      group: "yb",
    },
    {
      name: "전희선",
      group: "ob",
    },
    {
      name: "최가희",
      group: "yb",
    },
    {
      name: "임채영",
      group: "yb",
    },
  ];
  return res.status(200).json(memberInfo);
});

module.exports = router;
