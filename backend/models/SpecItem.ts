// models/SpecItem.ts
import { DataTypes } from "sequelize";
import sequelize from "../sequelize";
import SpecGroup from "./SpecGroup";

const SpecItem = sequelize.define("SpecItem", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

SpecGroup.hasMany(SpecItem, { foreignKey: "groupId", as: "items" });
SpecItem.belongsTo(SpecGroup, { foreignKey: "groupId" });

export default SpecItem;