// src/api/user.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/:movieId", (req: Request, res: Response) => {
  const { movieId } = req.params;
  return res.status(200).json({
    status: 200,
    message: "영화 조회 성공",
    data: {
      _id: movieId,
      thumbnail: `${process.env.S3_BASE_URL}/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png`,
      titleImage: `${process.env.S3_BASE_URL}/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png`,
      videoUrl: `${process.env.S3_BASE_URL}/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png`,
      movieInfo: {
        title: "수리남",
        isOriginal: true,
        releaseDate: "2022-10-30",
        ageLimit: 15,
        episodeCount: 7,
        actors: ["하정우", "..."],
        genres: ["공포", "스릴러"],
        seriesFeatures: [],
        isLiked: true,
        isHave: true,
      },
    },
    currentEpisode: {
      episodeNumber: 6,
      summary: "재밌다..1화",
      entireRunTime: 57,
      currentRunTime: 62,
    },
  });
});

module.exports = router;