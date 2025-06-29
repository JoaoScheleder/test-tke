import { Component, inject, OnInit } from '@angular/core';
import { MOVIE_SERVICE } from '../../../interface/movie-service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../../interface/movie';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails implements OnInit {

  private movieService = inject(MOVIE_SERVICE);
  private movieId: number | null = null;
  
  movie : IMovie | undefined = undefined;
  loading: boolean = true;

  constructor(private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.movieId = Number(this.activatedRoute.snapshot.params['id']);
    this.getMovieById();
  }

  getMovieById(){
    if (this.movieId) {
      this.loading = true;
      this.movieService.getMovieById(this.movieId).subscribe({
        next: (movie) => {
          if (movie) {
            this.movie = movie;
            console.log('Movie details:', movie);
          } else {
            console.error('Movie not found');
          }
        },
        error: (err) => {
          console.error('Error fetching movie details:', err);
        },
        complete: () => {
          this.loading = false;
        }
      })
    }
  }

}
