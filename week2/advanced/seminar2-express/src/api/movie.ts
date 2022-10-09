import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  let movieInfo = [
    {
      name: "인생은 아름다워",
      category: "뮤지컬",
    },
    {
      name: "정직한 후보2",
      category: "코미디",
    },
  ];

  return res.status(200).json(movieInfo);
});

module.exports = router;
