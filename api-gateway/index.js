const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 8081;

app.use(express.json());
app.use(cors());

app.get("/random-number", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8082/random-number");
    const randomNumber = response.data.randomNumber;
    res.json({ randomNumber });
  } catch (error) {
    res.status(500).json({ error: "Failed to get random number" });
  }
});

app.get("/version", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8083/version");
    const version = response.data.version;
    res.json({ version });
  } catch (error) {
    res.status(500).json({ error: "Failed to get version number" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
