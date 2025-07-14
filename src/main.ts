import { getPopularMovies } from './api/tmdb.js';
import { renderMovies } from './components/MovieCard.js';

getPopularMovies().then(movies => {
  renderMovies(movies, document.getElementById('app')!);
});
