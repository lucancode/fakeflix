const API_KEY='2e35a53539dbf630d62b85e6989dd36f';

// API requests by category
const req = {
    // The URLs are constructed using string interpolation to insert the value of the API_KEY variable into the query parameters
    pullPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    pullUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    pullPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    pullRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    pullTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`,
}
// Export the object so that we can fetch the API content throughout our project.
// This modular approach allows for easy access to these API endpoints from different parts of our application

export default req;