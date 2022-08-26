import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const WeatherModel = sequelize.define("weather_history", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});