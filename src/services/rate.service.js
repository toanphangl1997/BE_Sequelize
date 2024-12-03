import Order from "../models/order-model.js";
import RateRes from "../models/rate-res-model.js";

export const rateService = {
  postRate: async (req) => {
    const { user_id, res_id } = req.body;
    // Kiểm trả dữ liệu đầu vào
    if (!user_id || !res_id) {
      throw new Error("Thiếu user_id hoặc res_id");
    }
    const [rate, created] = await RateRes.findOrCreate({
      where: { user_id, res_id },
      defaults: { date_rate: new Date() },
    });

    if (!created) {
      throw new Error(`User ${user_id} đã đánh giá nhà hàng này`);
    }

    return {
      message: "Đánh giá thành công",
      rate,
    };
  },

  getRateById: async (req) => {
    const { res_id } = req.params;
    if (!res_id) {
      throw new Error("Vui lòng cung cấp res_id");
    }
    const result = await RateRes.findAll({
      where: { res_id },
    });
    if (result === 0) {
      throw new Error("Không tìm thấy res_id");
    }
    return result;
  },

  orderFood: async (req) => {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;
    // Kiểm tra đàu vào
    if (!user_id || !food_id) {
      throw new Error("Thiếu thông tin bắt buộc: user_id và food_id");
    }
    const [order, created] = await Order.findOrCreate({
      where: {
        user_id,
        food_id,
      },
      defaults: {
        amount,
        code,
        arr_sub_id,
      },
    });

    if (!created) {
      throw new Error(`User ${user_id} đã order mốn này`);
    }
    return {
      message: "Order thành công",
      order,
    };
  },
};
