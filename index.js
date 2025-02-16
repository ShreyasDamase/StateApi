const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(cors());
const stateData = [
  { id: 1, name: "Maharashtra" },
  { id: 2, name: "Gujarat" },
  { id: 3, name: "Rajasthan" },
  { id: 4, name: "Uttar Pradesh" },
  { id: 5, name: "Madhya Pradesh" },
  { id: 6, name: "Karnataka" },
  { id: 7, name: "Tamil Nadu" },
  { id: 8, name: "West Bengal" },
  { id: 9, name: "Bihar" },
  { id: 10, name: "Andhra Pradesh" },
  { id: 11, name: "Telangana" },
  { id: 12, name: "Odisha" },
  { id: 13, name: "Kerala" },
  { id: 14, name: "Punjab" },
  { id: 15, name: "Haryana" },
  { id: 16, name: "Jharkhand" },
  { id: 17, name: "Assam" },
  { id: 18, name: "Chhattisgarh" },
  { id: 19, name: "Uttarakhand" },
  { id: 20, name: "Himachal Pradesh" },
  { id: 21, name: "Tripura" },
  { id: 22, name: "Meghalaya" },
  { id: 23, name: "Manipur" },
  { id: 24, name: "Nagaland" },
  { id: 25, name: "Goa" },
  { id: 26, name: "Arunachal Pradesh" },
  { id: 27, name: "Mizoram" },
  { id: 28, name: "Sikkim" },
];

app.get("/data/id", (req, res) => {
  const id = parseInt(req.query.id);
  if (id) {
    const state = stateData.find((item) => item.id == id);
    if (state) return res.json(state);
    return res.status(400).json({ error: "State not found" });
  }
  res.json(state);
});

app.get("/data/name", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: "Name is requred in query " });
  }
  const states = stateData.filter((item) => {
    return item.name.toLowerCase().startsWith(name.toLowerCase());
  });
  if (states.length > 0) {
    return res.json(states);
  } else {
    return res.sendStatus(404).json({ error: "no state found" });
  }
});

app.listen(PORT, () => {
  console.log("server is running on :", PORT);
});
