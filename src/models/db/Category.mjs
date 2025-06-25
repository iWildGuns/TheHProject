import { sequelize, DataTypes } from "./Sequelize.mjs";

// export default (sequelize, DataTypes) => {

const Category = sequelize.define(
  "categories",
  {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "categories",
    timestamps: false,
  }
);
export default Category;
// }
