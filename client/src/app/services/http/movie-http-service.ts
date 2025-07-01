import { Injectable } from '@angular/core';
import { MovieService } from '../../../interface/movie-service';
import { Observable } from 'rxjs';
import { IMovie } from '../../../interface/movie';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieHTTPService implements MovieService {

  api = environment.api + '/movies';

  constructor(private http : HttpClient) { }
  
  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.api);
  }
  getMovieById(id: number): Observable<IMovie | undefined> {
    return this.http.get<IMovie | undefined>(`${this.api}/${id}`);
  }
  getMoviesByTitle(title: string): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.api}/title/${title}`);
  }
}
