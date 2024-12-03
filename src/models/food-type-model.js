import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const FoodType = sequelize.define(
  "FoodType",
  {
    type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "food_type",
    timestamps: false,
  }
);
FoodType.sync()
  .then(() => {
    console.log("Đồng bộ table thành công");
  })
  .catch((err) => {
    console.log("Đồng bộ table không thành công", err);
  });

export default FoodType;
