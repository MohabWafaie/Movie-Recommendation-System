const API_KEY = 'f74d3ebb9516dbf77e6f04d3fa5e4537';
const BASE_URL = 'https://api.themoviedb.org/3';
export async function getMovies(endpoint, params = {}) {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    url.searchParams.append('api_key', API_KEY);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });
    const response = await fetch(url.toString());
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}
