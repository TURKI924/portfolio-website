const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const data = {
  revenue: [12000, 15000, 18000, 22000, 30000],
  riskScore: 32,
  activeClients: 58
};

app.get("/api/dashboard", (req, res) => {
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});