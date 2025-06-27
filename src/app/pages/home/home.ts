import { Component } from '@angular/core';
import { HighlightsCarrousel, IMovie } from "../../components/highlights-carrousel/highlights-carrousel";
import { MoviesListCarrousel } from "../../components/movies-list-carrousel/movies-list-carrousel";

@Component({
  selector: 'app-home',
  imports: [HighlightsCarrousel, MoviesListCarrousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 movies: IMovie[] = [
  {
    id: 6,
    title: "Matrix",
    description: "Um hacker descobre que o mundo em que vive é uma simulação controlada por máquinas.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/The_Matrix",
    imdbUrl: "https://www.imdb.com/title/tt0133093/",
    trailerUrl: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
    releaseDate: "1999-03-31",
    rating: 8.7,
    genres: ["Ação", "Ficção Científica"],
    duration: "2h 16min",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    id: 7,
    title: "Donnie Darko",
    description: "Um adolescente perturbado é guiado por visões misteriosas após escapar de um acidente bizarro.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/5/5a/Donnie_Darko_poster.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/Donnie_Darko",
    imdbUrl: "https://www.imdb.com/title/tt0246578/",
    trailerUrl: "https://www.youtube.com/watch?v=ZZyBaFYFySk",
    releaseDate: "2001-10-26",
    rating: 8.0,
    genres: ["Drama", "Mistério", "Ficção Científica"],
    duration: "1h 53min",
    director: "Richard Kelly",
    cast: ["Jake Gyllenhaal", "Jena Malone", "Drew Barrymore"]
  },
  {
    id: 8,
    title: "Réquiem para um Sonho",
    description: "Um retrato visceral da decadência causada pela dependência química.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/6/6f/Requiem_for_a_dream_poster.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/R%C3%A9quiem_para_um_Sonho",
    imdbUrl: "https://www.imdb.com/title/tt0180093/",
    trailerUrl: "https://www.youtube.com/watch?v=0nU7dC9bIDg",
    releaseDate: "2000-10-27",
    rating: 8.3,
    genres: ["Drama", "Psicológico"],
    duration: "1h 42min",
    director: "Darren Aronofsky",
    cast: ["Ellen Burstyn", "Jared Leto", "Jennifer Connelly"]
  },
  {
    id: 9,
    title: "O Show de Truman",
    description: "Truman vive sem saber que sua vida é um reality show transmitido para o mundo todo.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/5/5f/Truman_Show_Poster.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/The_Truman_Show",
    imdbUrl: "https://www.imdb.com/title/tt0120382/",
    trailerUrl: "https://www.youtube.com/watch?v=dlnmQbPGuls",
    releaseDate: "1998-06-05",
    rating: 8.2,
    genres: ["Drama", "Ficção Científica"],
    duration: "1h 43min",
    director: "Peter Weir",
    cast: ["Jim Carrey", "Ed Harris", "Laura Linney"]
  },
  {
    id: 10,
    title: "2001: Uma Odisseia no Espaço",
    description: "Uma jornada enigmática pela evolução humana e a inteligência artificial.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/e/e1/2001_uma_Odisseia_no_Espa%C3%A7o_capa.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/2001:_Uma_Odisseia_no_Espa%C3%A7o",
    imdbUrl: "https://www.imdb.com/title/tt0062622/",
    trailerUrl: "https://www.youtube.com/watch?v=oR_e9y-bka0",
    releaseDate: "1968-04-03",
    rating: 8.3,
    genres: ["Ficção Científica", "Mistério", "Aventura"],
    duration: "2h 29min",
    director: "Stanley Kubrick",
    cast: ["Keir Dullea", "Gary Lockwood", "Douglas Rain"]
  },
  {
    id: 11,
    title: "Amnésia",
    description: "Um homem com perda de memória recente tenta encontrar o assassino de sua esposa.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/f/fe/Memento_poster.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/Memento_(filme)",
    imdbUrl: "https://www.imdb.com/title/tt0209144/",
    trailerUrl: "https://www.youtube.com/watch?v=0vS0E9bBSL0",
    releaseDate: "2000-10-11",
    rating: 8.4,
    genres: ["Mistério", "Thriller", "Psicológico"],
    duration: "1h 53min",
    director: "Christopher Nolan",
    cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"]
  },
  {
    id: 12,
    title: "Brilho Eterno de uma Mente sem Lembranças",
    description: "Após um término, um casal decide apagar as memórias um do outro — literalmente.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/2/22/Brilho_eterno_de_uma_mente_sem_lembran%C3%A7as.png",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/Brilho_Eterno_de_uma_Mente_sem_Lembran%C3%A7as",
    imdbUrl: "https://www.imdb.com/title/tt0338013/",
    trailerUrl: "https://www.youtube.com/watch?v=1GiLxkDK8sI",
    releaseDate: "2004-03-19",
    rating: 8.3,
    genres: ["Drama", "Romance", "Ficção Científica"],
    duration: "1h 48min",
    director: "Michel Gondry",
    cast: ["Jim Carrey", "Kate Winslet", "Elijah Wood"]
  },
  {
    id: 13,
    title: "O Predestinado",
    description: "Um agente temporal tenta capturar um criminoso, em uma trama com reviravoltas de identidade e tempo.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/f/f0/O_Predestinado.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/Predestination",
    imdbUrl: "https://www.imdb.com/title/tt2397535/",
    trailerUrl: "https://www.youtube.com/watch?v=xxG-YfedrfU",
    releaseDate: "2014-08-28",
    rating: 7.5,
    genres: ["Ficção Científica", "Suspense"],
    duration: "1h 37min",
    director: "Michael Spierig, Peter Spierig",
    cast: ["Ethan Hawke", "Sarah Snook", "Noah Taylor"]
  },
  {
    id: 14,
    title: "O Homem Duplicado",
    description: "Um professor vê um ator idêntico a ele e mergulha em uma espiral de paranoia e identidade.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/e/e6/O_Homem_Duplicado.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/O_Homem_Duplicado_(filme)",
    imdbUrl: "https://www.imdb.com/title/tt2316411/",
    trailerUrl: "https://www.youtube.com/watch?v=GJFehE66z1Q",
    releaseDate: "2013-09-08",
    rating: 6.9,
    genres: ["Mistério", "Drama", "Psicológico"],
    duration: "1h 30min",
    director: "Denis Villeneuve",
    cast: ["Jake Gyllenhaal", "Mélanie Laurent", "Sarah Gadon"]
  },
  {
    id: 15,
    title: "O Quinto Poder",
    description: "A história do surgimento do WikiLeaks e o impacto global de suas revelações.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/f/f9/O_Quinto_Poder.jpg",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/O_Quinto_Poder",
    imdbUrl: "https://www.imdb.com/title/tt1837703/",
    trailerUrl: "https://www.youtube.com/watch?v=ZT1wb8_tcYU",
    releaseDate: "2013-10-18",
    rating: 6.2,
    genres: ["Drama", "Biografia", "Suspense"],
    duration: "2h 8min",
    director: "Bill Condon",
    cast: ["Benedict Cumberbatch", "Daniel Brühl", "Laura Linney"]
  }
];

}
