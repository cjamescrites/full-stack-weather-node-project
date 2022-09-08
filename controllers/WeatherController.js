import { WeatherModel } from "../models/weatherModel.js"

export const getWeather = (req, res) => {
    WeatherModel.findAll()
    .then(weather => {
        res.status(200).send(weather)})
        .catch(err => {
            console.log(err)
        })
};

export const addWeather = (req, res) => {
    WeatherModel.create({
        name: req.body.name,
        temp: req.body.temp,
        temp_max: req.body.temp_max,
        temp_min: req.body.temp_min,
        humidity: req.body.humidity,
    })
    .then(() => {
        res.status(201).send({message: "Weather Query Added!"})
    })
    .catch(err => {
        console.log(err)
    }) 
};