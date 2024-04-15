const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8083;

app.use(express.json());
app.use(cors());

app.get("/version", async (req, res) => {
  try {
    const version = 1;
    res.json({ version });
  } catch (error) {
    res.status(500).json({ error: "Failed to get version number" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
