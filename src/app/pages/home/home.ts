import { Component } from '@angular/core';
import { HighlightsCarrousel } from "../../components/highlights-carrousel/highlights-carrousel";

@Component({
  selector: 'app-home',
  imports: [HighlightsCarrousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
