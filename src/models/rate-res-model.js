import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const RateRes = sequelize.define(
  "RateRes",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false, // Yêu cầu user_id bắt buộc
    },
    res_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false, // Yêu cầu res_id bắt buộc
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date_rate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "rate_res",
    timestamps: false,
  }
);

RateRes.sync()
  .then(() => {
    console.log("Đồng bộ table thành công");
  })
  .catch((err) => {
    console.log("Đồng bộ table không thành công", err);
  });

export default RateRes;
