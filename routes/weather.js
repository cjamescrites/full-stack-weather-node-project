import Router from 'express';
import { getWeather, addWeather } from "../controllers/WeatherController.js";

const router = Router();

router.get("/", getWeather);

router.post("/", addWeather);

export default router;