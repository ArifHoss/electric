// models/Product.ts
import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Product = sequelize.define(
    "Product",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.ENUM("LAPTOP", "PHONE", "TV", "FRIDGE", "TABLET", "SMARTWATCH", "ACCESSORY", "OTHER"),
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING(3),
            allowNull: false,
            defaultValue: "SEK",
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "products",
        timestamps: true,
    }
);

export default Product;