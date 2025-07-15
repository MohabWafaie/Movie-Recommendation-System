import { getMovies } from './api/tmdb.js';
import { renderMovies } from './components/MovieCard.js';
import { Page } from './interfaces.js';

getMovies<Page>("movie/popular").then(data => {
  renderMovies(data.results, document.getElementById('app')!);
});
