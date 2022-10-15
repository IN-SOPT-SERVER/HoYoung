import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  let commentInfo = [
    {
      nickname: "zi존가희",
      comment: "ㅋㅋㅋ",
    },
    {
      nickname: "퇴근하고싶다아",
      comment: "퇴근퇴근",
    },
  ];
  return res.status(200).json(commentInfo);
});

module.exports = router;
