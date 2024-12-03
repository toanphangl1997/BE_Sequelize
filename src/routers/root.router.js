import express from "express";
import likeRouter from "./like.router.js";
import rateRouter from "./rate.router.js";
import userRouter from "./user.router.js";

const rootRouter = express.Router();

rootRouter.use("/like", likeRouter);

rootRouter.use("/rate", rateRouter);

rootRouter.use("/user", userRouter);

export default rootRouter;
