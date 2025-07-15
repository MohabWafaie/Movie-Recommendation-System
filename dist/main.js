import { getMovies } from './api/tmdb.js';
import { renderMovies } from './components/MovieCard.js';
getMovies("movie/popular").then(data => {
    renderMovies(data.results, document.getElementById('app'));
});
