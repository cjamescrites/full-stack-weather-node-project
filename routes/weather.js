import Router from 'express';
import { getWeather, addWeather } from "../controllers/WeatherController.js";

const router = Router();

router.get("/", getWeather);

router.post("/addweather", addWeather);

export default router;