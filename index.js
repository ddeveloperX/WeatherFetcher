import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import axios from "axios";

const app = express();
const port = 3002;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.374&longitude=4.8897&daily=weather_code,sunrise,sunset,daylight_duration,uv_index_max,rain_sum&timezone=Europe%2FBerlin&forecast_days=1");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { forecast: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("solution.ejs", {
      error: error.message,
    });
  }

});

app.post("/city", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
