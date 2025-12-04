const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Cloud Computing – A Modern Guide"
  });
});

app.listen(PORT, () => {
  console.log(`Website running at http://localhost:${PORT}`);
});
