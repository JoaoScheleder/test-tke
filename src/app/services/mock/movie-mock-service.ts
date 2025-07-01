import { Injectable } from '@angular/core';
import { MovieService } from '../../../interface/movie-service';
import { of } from 'rxjs';

const data = [
      {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/inception.jpg",
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
    title: "Ex Machina",
    description: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/ex_machinima.webp",
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
    title: "Fight Club",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/fight_club.jpg",
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
    description: "In the near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/her.jpg",
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
    title: "The Imitation Game",
    description: "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/imitation_game.png",
    wikipediaUrl: "https://pt.wikipedia.org/wiki/The_Imitation_Game",
    imdbUrl: "https://www.imdb.com/title/tt2084970/",
    trailerUrl: "https://www.youtube.com/watch?v=S5CjKEFb-sM",
    releaseDate: "2014-11-28",
    rating: 8.0,
    genres: ["Drama", "Histórico", "Biografia"],
    duration: "1h 53min",
    director: "Morten Tyldum",
    cast: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"]
  },
  {
    id: 6,
    title: "Matrix",
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/matrix_movie.jpg",
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
    description: "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/donnie_darko.jpg",
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
    title: "Requiem for a Dream",
    description: "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/requiem_for_a_dream.webp",
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
    title: "The Truman Show",
    description: "An insurance salesman begins to suspect that his whole life is actually some sort of reality TV show.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/truman_show.jpg",
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
    title: "2001: A Space Odyssey",
    description: "When a mysterious artifact is uncovered on the Moon, a spacecraft manned by two humans and one supercomputer is sent to Jupiter to find its origins.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/2001_a_space_odyssey.jpg",
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
    title: "Memento",
    description: "A former insurance investigator who now suffers from anterograde amnesia uses notes and tattoos to hunt down his wife's murderer.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/memento.jpg",
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
    title: "Eternal Sunshine of the Spotless Mind",
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/eternal_sunshine_of_the_spotless_mind.jpg",
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
    title: "Predestination",
    description: "As his last assignment, a temporal agent is tasked to travel back in time and prevent a bomb attack in New York in 1975. The hunt, however, turns out to be beyond the bounds of possibility.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/predestination.jpg",
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
    title: "Enemy",
    description: "A mild-mannered college professor investigates the life of an actor who looks exactly like him.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/enemy.jpg",
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
    title: "The Fifth Estate",
    description: "A dramatic thriller based on real events that reveals the quest to expose the deceptions and corruptions of power that turned an Internet upstart into the 21st century's most fiercely debated organization.",
    imageUrl: "https://movies-tke-test.s3.us-east-1.amazonaws.com/the_fifth_estate.jpg",
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
]

@Injectable({
  providedIn: 'root'
})
export class MovieMockService implements MovieService{

  constructor() { }

  getMovies() {
    return of(data)
  }

  getMovieById(id: number) {
    return of(data.find(movie => movie.id === id));
  }

  getMoviesByTitle(title: string) {
    return of(data.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase())));
  }
}
