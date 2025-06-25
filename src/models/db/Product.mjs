import { sequelize, DataTypes } from "./Sequelize.mjs";

// export default (sequelize, DataTypes) => {

const Product = sequelize.define(
  "products",
  {
    productId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    sku: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      default: "",
    },
    imgUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    weight: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    dimention: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "categoryId",
      },
    },
  },
  {
    tableName: "products",
    timestamps: true,
  }
);
export default Product;
// }
