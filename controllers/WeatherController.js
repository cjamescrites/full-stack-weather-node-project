import { WeatherModel } from "../models/weatherModel.js"

export const getWeather = (req, res) => {
    WeatherModel.findAll()
    .then(weather => {
        res.status(200).send(weather)})
        .catch(err => {
            console.log(err)
        })
};