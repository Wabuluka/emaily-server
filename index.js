const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "Hello World" });
});

app.get("/checkstatus", (req, res) => {
  res.send({ hey: "Everything is working well!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
