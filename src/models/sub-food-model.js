import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const SubFood = sequelize.define(
  "SubFood",
  {
    sub_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sub_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    food_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "food",
        key: "food_id",
      },
    },
  },
  {
    tableName: "sub_food",
    timestamps: false,
  }
);

SubFood.sync()
  .then(() => {
    console.log("Đồng bộ table thành công");
  })
  .catch((err) => {
    console.log("Đồng bộ table không thành công", err);
  });

export default SubFood;
