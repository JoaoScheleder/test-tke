import { Observable } from 'rxjs';
import { IMovie } from './movie';
import { InjectionToken } from '@angular/core';

export interface MovieService {
  getMovies(): Observable<IMovie[]>;
  getMovieById(id: number): Observable<IMovie | undefined>;
  getMoviesByTitle(title: string): Observable<IMovie[]>;
}

export const MOVIE_SERVICE = new InjectionToken<MovieService>('MovieService');