const express = require("express");
const app = express();
const port = 1996;
const movies = require("./data/movies.json");
app.listen(port);

app.use(express.json());

//!Https Methods:

//!Get-->
app.get("/", (req, res) => {
  if (movies) return res.send({ movies });
  else {
    res.status(404).send({ Message: "NO MOVIES!" });
  }
});

//!Get By ID -->
app.get("/:id", (req, res) => {
  const ChosenMovie = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (ChosenMovie) return res.send({ ChosenMovie });
  else {
    return res.status(404).send({ Message: "Error , Cannot Get Movie." });
  }
});
