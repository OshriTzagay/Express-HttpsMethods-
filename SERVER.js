require("dotenv").config(); ///|
//////////////////////////////
const express = require("express");
const app = express();
const cors = require("cors");
const movieRouter = require("./ROUTES/movies-route");
const port = process.env.PORT || 1996;

//!USES-->
//!_______
app.use(cors());
app.use(express.json());
app.use("/movies", movieRouter);

//!Https Methods:
//!_______________
//!Get-->
app.get("/", (req, res) => {
  res.send("SERVER IS ONLINE!");
});

app.listen(port);
