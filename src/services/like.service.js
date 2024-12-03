import LikeRes from "../models/like-res-model.js";

export const likeService = {
  postLike: async (req) => {
    const { user_id, res_id } = req.body;
    // kiểm tra dữ liệu đầu vào
    if (!user_id || !res_id) {
      throw new Error("Thiếu user_id hoặc res_id.");
    }

    // Tìm hoặc tạo bản ghi like
    const [like, created] = await LikeRes.findOrCreate({
      where: { user_id, res_id },
      defaults: { date_like: new Date() },
    });

    if (!created) {
      throw new Error("User đã like nhà hàng này.");
    }

    return {
      message: "Like thành công!",
      like,
    };
  },

  deleteLike: async (req) => {
    const { user_id, res_id } = req.body;
    if (!user_id || !res_id) {
      throw new Error("Thiếu user_id hoặc res_id");
    }

    const result = await LikeRes.destroy({
      where: {
        user_id,
        res_id,
      },
    });
    if (result === 0) {
      throw new Error("Không tìm thấy bản ghi like để xóa");
    }
    return {
      message: "Unlike thành công",
    };
  },

  getLikebyID: async (req) => {
    const { res_id } = req.params;
    if (!res_id) {
      throw new Error("Vui lòng cung cấp res_id");
    }

    const result = await LikeRes.findAll({
      where: {
        res_id,
      },
    });
    if (result === 0) {
      throw new Error("Không tìm thấy res_id");
    }
    return result;
  },
};
