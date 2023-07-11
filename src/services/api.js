import axios from 'axios';

const api = axios.create (
    {
    baseURL: 'https://api.themoviedb.org/3'
    });
export default api;


//BASE DA URL: https://api.themoviedb.org/3
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=fd0be2e2611fbac51cb4e5a706c1aa36

