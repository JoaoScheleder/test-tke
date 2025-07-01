import { Router } from "express";
import MovieController from "../controllers/movie.controller";

const movieRouter = Router();

movieRouter.get("/", MovieController.getMovies);
movieRouter.get("/:id", MovieController.getMovieById);
movieRouter.get("/title/:title", MovieController.getMoviesByTitle);

export default movieRouter;