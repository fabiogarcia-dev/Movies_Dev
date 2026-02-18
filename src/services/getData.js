import api from './api';

export async function getMovies() {
    const
        { data: { results }
        } = await api.get('/movie/popular') //desestruturar a resposta da API

    return results[5]
}

export async function getTopMovies() {
    const { data: { results }
    } = await api.get('/movie/top_rated') //desestruturar a resposta da API

    return results
}

export async function getTopSeries() {
    const { data: { results }
    } = await api.get('/tv/top_rated') //desestruturar a resposta da API

    return results
}


export async function getPopularMovies(){
    const { data: { results } } = await api.get("/movie/popular");
    return results; 
}

export async function getPopularSeries() {
    const { data: { results }
    } = await api.get('/tv/popular') //desestruturar a resposta da API

    return results
}

export async function getTopPeople() {
    const { data: { results }
    } = await api.get('/person/popular') //desestruturar a resposta da API
   
    return results
}    

export async function getMovieVideos(movieId) {
    const { data: { results }
            } = await api.get(`/movie/${movieId}/videos`) //desestruturar a resposta da API

    return results
}

export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`) //desestruturar a resposta da API

    return cast
}

export async function getMovieSimilar(movieId) {
    const { data: { results }
            } = await api.get(`/movie/${movieId}/similar`) //desestruturar a resposta da API

    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`) //desestruturar a resposta da API

    return data
}

export async function getUpcomingMovies(){
    const { data: { results } } = await api.get("/movie/upcoming");
    return results; 
}


export async function getMovieNowPlaying(){
    const { data: { results } } = await api.get("/movie/now_playing");
    return results; 
}


export async function getSeriesToday(){
    const { data: { results } } = await api.get("/tv/airing_today");
    return results; 
}


export async function getSeriesNext(){
    const { data: { results } } = await api.get("/tv/on_the_air");
    return results; 
}
