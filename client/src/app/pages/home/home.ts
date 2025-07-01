import { Component, inject, OnInit } from '@angular/core';
import { MoviesListCarrousel } from "../../components/movies-list-carrousel/movies-list-carrousel";
import { IMovie } from '../../../interface/movie';
import { MOVIE_SERVICE } from '../../../interface/movie-service';

@Component({
  selector: 'app-home',
  imports: [MoviesListCarrousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
 movies: IMovie[] = [];
 
 private movieService = inject(MOVIE_SERVICE);
 
 constructor(){}

  ngOnInit() {
      this.findAll();
  }

 findAll(){
    this.movieService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      }
    });
 }
}
