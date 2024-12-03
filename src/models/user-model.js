import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";
import Order from "./order-model.js";

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

// Liên kết
User.belongsTo(Order, { foreignKey: "user_id" });
User.hasMany(Order, { foreignKey: "user_id", as: "orders" });

User.sync()
  .then(() => {
    console.log("Đồng bộ table thành công");
  })
  .catch((err) => {
    console.log("Đồng bộ table không thành công", err);
  });

export default User;
