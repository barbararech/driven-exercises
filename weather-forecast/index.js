import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

const forecast = [
  { day: 1, temperature: "32 °C", wind: "8 km/h", views: 0 },
  { day: 2, temperature: "27 °C", wind: "9 km/h", views: 0 },
  { day: 3, temperature: "30 °C", wind: "8 km/h", views: 0 },
  { day: 4, temperature: "32 °C", wind: "7 km/h", views: 0 },
  { day: 5, temperature: "31 °C", wind: "8 km/h", views: 0 },
  { day: 6, temperature: "26 °C", wind: "10 km/h", views: 0 },
  { day: 7, temperature: "27 °C", wind: "9 km/h", views: 0 },
];

server.get("/forecast", (req, res) => {
  forecast.forEach((el) => el.views++);
  res.send(forecast);
});

server.get("/forecast/:day", (req, res) => {
  const day = req.params.day;
  const forecastday = forecast.find((el) => el.views++);
  res.send(forecastday);
});

server.listen(5000);