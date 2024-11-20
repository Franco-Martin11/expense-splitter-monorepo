import { Request, Response, Router } from "express";

const getRouter = Router();

const getDataTest = (_req: Request, res: Response) => {
  res.status(200).json({
    ok: {
      text: "esto es una prueba",
    },
  });
};

getRouter.get("/", getDataTest);

export default getRouter;
