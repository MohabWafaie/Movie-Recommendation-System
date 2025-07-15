import { Movie } from "../interfaces";

export function renderMovies(movies: Movie[], container: HTMLElement) {
  container.innerHTML = `
    <div class="row">
      ${movies.map(movie => `
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}" />
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.overview.substring(0, 100)}...</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
