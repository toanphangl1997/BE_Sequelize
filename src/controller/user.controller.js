import { userService } from "../services/user.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

export const userController = {
  listResOfUserLike: async function (req, res, next) {
    try {
      const result = await userService.listResOfUserLike(req);
      const response = responseSuccess(
        result,
        `Lấy dánh sách các nhà hàng người dùng yêu thích thành công`
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  listUserOfLikeRes: async function (req, res, next) {
    try {
      const result = await userService.listUserOfLikeRes(req);
      const response = responseSuccess(
        result,
        `lấy danh sách người dùng đã like nhà hàng thành công`
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  listOrderOfUser: async function (req, res, next) {
    try {
      const result = await userService.listOrderOfUser(req);
      const response = responseSuccess(
        result,
        `Lấy danh sách các đơn hàng của người dùng thành công`
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
};
