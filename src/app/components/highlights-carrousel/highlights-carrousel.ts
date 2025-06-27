import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';





export interface IMovie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  wikipediaUrl: string;
  imdbUrl: string;
  trailerUrl: string;
  releaseDate: string;
  rating: number;
  genres: string[];
  duration: string;
  director: string;
  cast: string[];  
}

export interface ITVShow {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  wikipediaUrl: string;
  imdbUrl: string;
  trailerUrl: string;
  releaseDate: string;
  rating: number;
  genres: string[];
  seasons: number;
  episodes: number;
  cast: string[];
}

@Component({
  selector: 'app-highlights-carrousel',
  imports: [],
  templateUrl: './highlights-carrousel.html',
  styleUrl: './highlights-carrousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HighlightsCarrousel {

  movies: IMovie[] = [
  {
    id: 1,
    title: "A Origem",
    description: "Um ladrão que invade os sonhos das pessoas precisa realizar o impossível: implantar uma ideia na mente de um alvo.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/2/2e/Inception_2010.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/Inception",
    imdbUrl: "https://www.imdb.com/title/tt1375666/",
    trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    releaseDate: "2010-07-16",
    rating: 8.8,
    genres: ["Ação", "Ficção Científica", "Suspense"],
    duration: "2h 28min",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  },
  {
    id: 2,
    title: "Ex Machina: Instinto Artificial",
    description: "Um jovem programador é convidado a administrar um teste de Turing em um robô com inteligência artificial.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/5/54/Ex_Machina_poster.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/Ex_Machina",
    imdbUrl: "https://www.imdb.com/title/tt0470752/",
    trailerUrl: "https://www.youtube.com/watch?v=bggUmgeMCdc",
    releaseDate: "2015-01-21",
    rating: 7.7,
    genres: ["Ficção Científica", "Drama", "Suspense"],
    duration: "1h 48min",
    director: "Alex Garland",
    cast: ["Alicia Vikander", "Domhnall Gleeson", "Oscar Isaac"]
  },
  {
    id: 3,
    title: "Clube da Luta",
    description: "Um homem insone forma um clube secreto de lutas como forma de escapar de sua vida monótona e descobre algo muito maior.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/7/7e/Fight_Club_Capa.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/Fight_Club",
    imdbUrl: "https://www.imdb.com/title/tt0137523/",
    trailerUrl: "https://www.youtube.com/watch?v=BdJKm16Co6M",
    releaseDate: "1999-10-15",
    rating: 8.8,
    genres: ["Drama", "Psicológico"],
    duration: "2h 19min",
    director: "David Fincher",
    cast: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"]
  },
  {
    id: 4,
    title: "Her",
    description: "Em um futuro próximo, um homem solitário se apaixona por um sistema operacional de inteligência artificial.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/4/44/Her_poster.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/Her_(filme)",
    imdbUrl: "https://www.imdb.com/title/tt1798709/",
    trailerUrl: "https://www.youtube.com/watch?v=WzV6mXIOVl4",
    releaseDate: "2013-12-18",
    rating: 8.0,
    genres: ["Drama", "Romance", "Ficção Científica"],
    duration: "2h 6min",
    director: "Spike Jonze",
    cast: ["Joaquin Phoenix", "Scarlett Johansson", "Amy Adams"]
  },
  {
    id: 5,
    title: "O Jogo da Imitação",
    description: "A história real de Alan Turing, o matemático que ajudou a decifrar códigos nazistas e criou as bases da computação moderna.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/e/e1/The_Imitation_Game_poster.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/The_Imitation_Game",
    imdbUrl: "https://www.imdb.com/title/tt2084970/",
    trailerUrl: "https://www.youtube.com/watch?v=S5CjKEFb-sM",
    releaseDate: "2014-11-28",
    rating: 8.0,
    genres: ["Drama", "Histórico", "Biografia"],
    duration: "1h 53min",
    director: "Morten Tyldum",
    cast: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"]
  }
];

}
