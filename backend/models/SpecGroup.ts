// models/SpecGroup.ts
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import Product from './Product';

const SpecGroup = sequelize.define('SpecGroup', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Product.hasMany(SpecGroup, { foreignKey: 'productId', as: 'specGroups' });
SpecGroup.belongsTo(Product, { foreignKey: 'productId' });

export default SpecGroup;
