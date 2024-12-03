import express from "express";
import { likeController } from "../controller/like.controller.js";

const likeRouter = express.Router();
// POST người dùng like một nhà hàng
likeRouter.post("/like-res", likeController.postLike);
// DELETE người dùng unlike một nhà hàng
likeRouter.delete("/delete-res", likeController.deleteLike);
// Get danh sách những người đã like một nhà hàng cụ thể
likeRouter.get("/like-res/:res_id", likeController.getLikebyID);

export default likeRouter;
