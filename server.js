const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

const db = require("./models");

mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost/chihuahuaDB", {useNewUrlParser: true })
  .then(() => console.log("Database Connected!"))
  .catch(err => console.log(err));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Get all the chihuahuas from the database
app.get("/api/chihuahuas", (req, res) => {
  db.Chihuahua
    .find({})
    .then(dbChihuahuas => res.json(dbChihuahuas))
    .catch(err => res.status(422).json(err));
}); 

// Add a chihuahua to the database
app.post("/api/chihuahuas", (req, res) => {
  db.Chihuahua
    .create(req.body)
    .then(dbChihuahua => res.json(dbChihuahua))
    .catch(err => res.status(422).json(err));
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
