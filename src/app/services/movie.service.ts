import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  poster: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      poster: 'assets/posters/inception.jpg',
      description: 'A mind-bending thriller by Christopher Nolan.'
    },
    {
      id: 2,
      title: 'Interstellar',
      poster: 'assets/posters/interstellar.jpg',
      description: 'A journey beyond the stars.'
    }
    // add more movies
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}
