import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";
import Restaurant from "./restaurant-model.js";
import User from "./user-model.js";

const LikeRes = sequelize.define(
  "LikeRes",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: User,
        key: "user_id",
      },
    },
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Restaurant,
        key: "res_id",
      },
    },
    date_like: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "like_res",
    timestamps: false,
  }
);

// liên kết
LikeRes.belongsTo(User, { foreignKey: "user_id" });
LikeRes.belongsTo(Restaurant, { foreignKey: "res_id" });
Restaurant.hasMany(LikeRes, { foreignKey: "res_id" });

LikeRes.sync()
  .then(() => {
    console.log("Đồng bộ table thành công");
  })
  .catch((err) => {
    console.log("Đồng bộ table không thành công", err);
  });

export default LikeRes;
