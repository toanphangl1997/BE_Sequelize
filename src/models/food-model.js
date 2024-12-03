import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const Food = sequelize.define(
  "Food",
  {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.TEXT,
    },
    type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "food_type",
        key: "type_id",
      },
    },
  },
  {
    tableName: "food",
    timestamps: false,
  }
);

Food.sync()
  .then(() => {
    console.log("Đồng bộ table thành công");
  })
  .catch((err) => {
    console.log("Đồng bộ table không thành công", err);
  });

export default Food;
