const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8082;

app.use(express.json());
app.use(cors());

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/random-number", async (req, res) => {
  try {
    const randomNumber = getRandomInt(1, 1000);
    res.json({ randomNumber });
  } catch (error) {
    res.status(500).json({ error: "Failed to get random number" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
