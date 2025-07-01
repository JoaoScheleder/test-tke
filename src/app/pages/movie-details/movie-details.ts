import { Component, inject, OnInit } from '@angular/core';
import { MOVIE_SERVICE } from '../../../interface/movie-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IMovie } from '../../../interface/movie';
import { MatChipsModule } from '@angular/material/chips';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-movie-details',
  imports: [RouterLink, MatChipsModule, DatePipe, MatButtonModule, MatIconModule],
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

  navigateToUrl(url: string) {
    window.open(url, '_blank');
  }
}
