const {
  getMovies,
  getMoviesById,
  AddMovie,
  EditMovie,
  DeleteMovie,
} = require("../CONTROLLERS/movies-ctrls");
const MovieRouter = require("express").Router();

//!Https Methods:
//!_______________

//!Get-->
MovieRouter.get("/", getMovies);

//!{Get By ID} -->
MovieRouter.get("/:id", getMoviesById);

//!{POST} -->
MovieRouter.post("/", AddMovie);

//!{PUT} -->
MovieRouter.put("/:id", EditMovie);

//!{DELETE} -->
MovieRouter.delete("/:id", DeleteMovie);

module.exports = MovieRouter;
