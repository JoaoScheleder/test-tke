import { Component, inject } from '@angular/core';
import { MOVIE_SERVICE } from '../../../interface/movie-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IMovie } from '../../../interface/movie';
import { MovieCard } from '../../components/movie-card/movie-card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-search-result',
  imports: [RouterLink, MovieCard, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './search-result.html',
  styleUrl: './search-result.scss'
})
export class SearchResult {
  private movieService = inject(MOVIE_SERVICE);
  private searchQuery: string = '';

  loading: boolean = true;
  movies: IMovie[] = []
  
  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
      if (this.searchQuery) {
        console.log('Search query from URL:', this.searchQuery);
        this.movies = []
        this.getSearchResults();
      } else {
        console.warn('No search query found in URL parameters.');
      }
    })
  }

  getSearchResults() {
    if(!this.searchQuery) {
      console.error('Search query is not provided in the URL parameters.');
      return;
    }
    this.loading = true;
    this.movieService.getMoviesByTitle(this.searchQuery).subscribe({
      next: (movies) => {
        console.log('Movies fetched successfully:', movies);
        if (movies && movies.length > 0) {
          this.movies = movies;
          console.log('Search results:', movies);
        } else {
          console.warn('No movies found for the search query:', this.searchQuery);
        }
      },
      error: (err) => {
        console.error('Error fetching search results:', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
