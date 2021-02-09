const express = require("express");
const massive = require("massive");
require("dotenv").config();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const app = express();
const ctrl = require("./controller");

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    app.set("db", db);
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.get("/api/movies", ctrl.getMovies);
app.post("/api/movies", ctrl.addMovie);
app.put("/api/movies/:id", ctrl.editMovie);
app.delete("/api/movies/:id", ctrl.deleteMovie);

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
