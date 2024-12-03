import express from "express";
import { rateController } from "../controller/rate.controller.js";

const rateRouter = express.Router();
// POST cho phép người dùng đánh giá nhà hàng
rateRouter.post("/rate-res", rateController.postRate);
// GET danh sách đánh giá của một nhà hàng cụ thể
rateRouter.get("/rate-res/:res_id", rateController.getRateById);
// Order
rateRouter.post("/order", rateController.orderFood);

export default rateRouter;
