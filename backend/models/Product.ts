// models/Product.ts
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: DataTypes.ENUM(
                'LAPTOP',
                'PHONE',
                'TV',
                'FRIDGE',
                'TABLET',
                'SMARTWATCH',
                'ACCESSORY',
                'OTHER',
                'HOME',
                'GAME',
                'KITCHEN'
            ),
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        currency: {
            type: DataTypes.STRING(3),
            allowNull: false,
            defaultValue: 'SEK'
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        reviews: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        availability: {
            type: DataTypes.STRING,
            allowNull: true
        },
        extraInfo: {
            type: DataTypes.TEXT, // Rich details or specs like CPU, RAM, usage tips
            allowNull: true
        },
        warranty: {
            type: DataTypes.STRING,
            allowNull: true
        },
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: true
        },
        modelNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        releaseDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        features: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        }
    },
    {
        tableName: 'products',
        timestamps: true
    }
);

export default Product;
