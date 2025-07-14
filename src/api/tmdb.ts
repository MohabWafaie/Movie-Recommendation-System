const API_KEY = 'f74d3ebb9516dbf77e6f04d3fa5e4537';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}
