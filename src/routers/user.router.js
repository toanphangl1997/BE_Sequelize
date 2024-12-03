import express from "express";
import { userController } from "../controller/user.controller.js";

const userRouter = express.Router();

// Lấy danh sách các nhà hàng mà người dùng yêu thích
userRouter.get("/user/:user_id/like-res", userController.listResOfUserLike);
// Lấy danh sách người dùng đã like một nhà hàng
userRouter.get("/restaurant/:res_id/users", userController.listUserOfLikeRes);
// Lấy danh sách các đơn hàng của người dùng
userRouter.get("/users/:user_id/order", userController.listOrderOfUser);

export default userRouter;
