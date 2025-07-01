import { Injectable } from '@angular/core';
import { MovieService } from '../../../interface/movie-service';
import { Observable } from 'rxjs';
import { IMovie } from '../../../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieHTTPService implements MovieService {

  constructor() { }
  
  getMovies(): Observable<IMovie[]> {
    throw new Error('Method not implemented.');
  }
  getMovieById(id: number): Observable<IMovie | undefined> {
    throw new Error('Method not implemented.');
  }
  getMoviesByTitle(title: string): Observable<IMovie[]> {
    throw new Error('Method not implemented.');
  }
}
