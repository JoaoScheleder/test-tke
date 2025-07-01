export interface IMovie{
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