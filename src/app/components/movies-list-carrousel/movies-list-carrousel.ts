import { Component, Input } from '@angular/core';
import { IMovie } from '../highlights-carrousel/highlights-carrousel';

@Component({
  selector: 'app-movies-list-carrousel',
  imports: [],
  templateUrl: './movies-list-carrousel.html',
  styleUrl: './movies-list-carrousel.scss',
})
export class MoviesListCarrousel {
  @Input('movies') movies: IMovie[] = [];
  @Input('title') title: string = 'Movies List';
}
