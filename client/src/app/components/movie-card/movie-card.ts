import { Component, Input } from '@angular/core';
import { IMovie } from '../../../interface/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {
  @Input('movie') movie : IMovie | undefined = undefined;
}
