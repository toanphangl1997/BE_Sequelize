import LikeRes from "../models/like-res-model.js";
import Order from "../models/order-model.js";
import Restaurant from "../models/restaurant-model.js";
import User from "../models/user-model.js";

export const userService = {
  listResOfUserLike: async function (req) {
    const { user_id } = req.params;
    // Kiểm trả user_id có được cung cấp hay không
    if (!user_id) {
      throw new Error("Vui lòng cung cấp user_id");
    }
    // Lấy danh sách nhà hàng mà người dùng đã thích
    const likes = await LikeRes.findAll({
      where: {
        user_id,
      },
      include: [
        {
          model: Restaurant, // Liên kết bảng nhà hàng
          attributes: ["res_id", "res_name", "image", "desc"], // Các trường cần trả về
        },
      ],
    });

    if (likes.length === 0) {
      throw new Error("Người dùng chưa thích bất ký nhà hàng nào");
    }

    return likes.map((like) => like.Restaurant); // Trả về danh sách nhà hàng
  },

  listUserOfLikeRes: async function (req) {
    const { res_id } = req.params;
    // Kiểm tra res_id có được cung cấp
    if (!res_id) {
      throw new Error("Vui lòng cung cấp res_id");
    }
    // Lấy danh sách người dùng đã like một nhà hàng
    const likes = await LikeRes.findAll({
      where: {
        res_id,
      },
      include: [
        {
          model: User, // Liên kết bảng User
          attributes: ["user_id", "full_name", "email"], // Các trường cần trả về
        },
      ],
    });

    if (!likes.length === 0) {
      throw new Error("Không tìm thấy người dùng nào đã thích nhà hàng này");
    }

    return likes.map((like) => like.User); // Trả về danh sách người dùng
  },

  listOrderOfUser: async (req) => {
    const { user_id } = req.params;
    if (!user_id) {
      throw new Error("Vui lòng cung cấp user_id");
    }
    // Lấy danh sách các đơn hàng của người dùng
    const orders = await User.findAll({
      where: {
        user_id,
      },
      include: [
        {
          model: Order, // liên kết bảng Order
          as: "orders", // Alias của quan hệ
          attributes: [
            "order_id",
            "user_id",
            "food_id",
            "amount",
            "code",
            "arr_sub_id",
          ],
        },
      ],
    });

    if (orders.length === 0) {
      throw new Error("Không tìm thấy danh sách đơn hàng của người dùng");
    }
    return orders.map((order) => order.orders);
  },
};
