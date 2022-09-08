import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const WeatherModel = sequelize.define("weather_history", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    
    temp: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    temp_max: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    temp_min: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    humidity: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});