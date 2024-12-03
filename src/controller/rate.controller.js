import { responseSuccess } from "../common/helpers/response.helper.js";
import { rateService } from "../services/rate.service.js";

export const rateController = {
  postRate: async (req, res, next) => {
    try {
      const result = await rateService.postRate(req);

      const resData = responseSuccess(result, "Đánh giá nhà hàng thành công");

      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },

  getRateById: async (req, res, next) => {
    try {
      const result = await rateService.getRateById(req);

      const resData = responseSuccess(
        result,
        "Lấy danh sách đã đánh giá nhà hàng thành công"
      );

      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },

  orderFood: async (req, res, next) => {
    try {
      const result = await rateService.orderFood(req);

      const resData = responseSuccess(result, "Order thành công");

      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};
