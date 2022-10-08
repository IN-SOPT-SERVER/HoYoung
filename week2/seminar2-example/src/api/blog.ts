// src/api/user.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

//~ localhost:3000/api/blog/
router.get("/", (req: Request, res: Response) => {
  const info = { name: "천호영" };

  return res.status(200).json(info);
});

module.exports = router; //* 위 생성한 route 객체를 어디에서든 사용하도록 모듈화!
