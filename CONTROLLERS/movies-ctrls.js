const fs = require("fs");
//!GET
const getMovies = (req, res) => {
  const movies = require("../data/movies.json");
  if (movies) return res.send({ movies });
  else {
    res.status(404).send({ Message: "NO MOVIES!" });
  }
};
//!GET {ID}

const getMoviesById = (req, res) => {
  const movies = require("../data/movies.json");
  const ChosenMovie = movies.find(
    (movie) => movie.id === parseInt(req.params.id)
  );
  if (ChosenMovie) return res.send({ ChosenMovie });
  else {
    return res.status(404).send({ Message: "Error , Cannot Get Movie." });
  }
};
//!POST

const AddMovie = (req, res) => {
  const movies = require("../data/movies.json");
  const movieToAdd = req.body;
  movies.push(movieToAdd);
  fs.writeFile("data/movies.json", JSON.stringify(movies), () => {});
  res.send({ movieToAdd });
};
//!PUT

const EditMovie = (req, res) => {
  const movies = require("../data/movies.json");
  const theMovie = movies.find((movie) => movie.id === parseInt(req.params.id));
  movies[movies.indexOf(theMovie)] = req.body.movie;
  fs.writeFile("./data/movies.json", JSON.stringify(movies), () => {});

  res.send({ Message: "U GOOD BRO." });
};
//!DELETE

const DeleteMovie = (req, res) => {
  const movies = require("../data/movies.json");
  const theMovie = movies.find((movie) => movie.id === parseInt(req.params.id));
  movies.splice()
  fs.writeFile("./data/movies.json", JSON.stringify(movies), () => {});
  //!BACK HERE!

  res.send({ Message: "DELETED." });
};

module.exports = {
  getMovies,
  getMoviesById,
  AddMovie,
  EditMovie,
  DeleteMovie,
};
