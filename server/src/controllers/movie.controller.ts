import { Request, Response } from "express";
import { data } from "../data/movies";

export default class MovieController {
    static getMovies(_ : Request, res : Response){
        res.status(200).json(data);
    }

    static getMovieById(req : Request, res : Response) {
        if (!req.params.id) {
            res.status(400).send({ message: "Movie ID is required" });
            return
        }
        const movieId = parseInt(req.params.id);
        const movie = data.find(m => m.id === movieId);
        if (!movie) {
            res.status(404).send({ message: "Movie not found" });
            return
        }
        res.status(200).json(movie);
        return 
    }

    static getMoviesByTitle(req : Request, res : Response) {
        if (!req.params.title) {
            res.status(400).send({ message: "Movie title is required" });
            return 
        }
        const movieTitle = req.params.title.toLowerCase();
        const movies = data.filter(m => m.title.toLowerCase().includes(movieTitle));
        if (movies.length === 0) {
            res.status(404).send({ message: "No movies found with the given title" });
            return
        }
        res.status(200).json(movies);
        return 
    }
}