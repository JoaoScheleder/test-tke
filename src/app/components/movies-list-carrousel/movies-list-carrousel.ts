import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { IMovie } from '../../../interface/movie';
import { MovieCard } from "../movie-card/movie-card";

@Component({
  selector: 'app-movies-list-carrousel',
  imports: [MovieCard],
  templateUrl: './movies-list-carrousel.html',
  styleUrl: './movies-list-carrousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoviesListCarrousel {
  @Input('movies') movies: IMovie[] = [];
  @Input('title') title: string = 'Movies List';
}
