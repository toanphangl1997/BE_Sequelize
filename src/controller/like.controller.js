import { responseSuccess } from "../common/helpers/response.helper.js";
import { likeService } from "../services/like.service.js";

export const likeController = {
  postLike: async (req, res, next) => {
    try {
      const result = await likeService.postLike(req);

      const resData = responseSuccess(result, "Like nhà hàng thành công");

      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },

  deleteLike: async (req, res, next) => {
    try {
      const result = await likeService.deleteLike(req);

      const resData = responseSuccess(result, "Unlike nhà hàng thành công");

      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },

  getLikebyID: async (req, res, next) => {
    try {
      const result = await likeService.getLikebyID(req);

      const resData = responseSuccess(
        result,
        "Lấy danh sách đã like nhà hàng thành công"
      );

      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};
