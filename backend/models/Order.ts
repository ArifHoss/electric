import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import User from './User';

const Order = sequelize.define(
    'Order',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.ENUM(
                'pending',
                'paid',
                'shipped',
                'completed',
                'cancelled'
            ),
            allowNull: false,
            defaultValue: 'pending'
        },
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: 'orders',
        timestamps: true
    }
);

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

export default Order;
