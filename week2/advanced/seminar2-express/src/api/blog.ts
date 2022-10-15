import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  let blogInfo = {
    visitorCount: 50,
    category: "개발블로그",
  };
  return res.status(200).json(blogInfo);
});

module.exports = router;
