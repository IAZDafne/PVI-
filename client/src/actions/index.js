import axios from 'axios';
import { FILTER_BY_DB, GET_VIDEOGAMES, FILTER_BY_GENRES, SEARCH_BY_NAME, SORT_BY_ALPHABET, SORT_BY_RATING, GET_VIDEOGAME_DETAIL } from '../redurces/index';

export function getVideogames() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/videogames');
        dispatch({ type: GET_VIDEOGAMES, payload: response.data });
    }
}
export function getVideogameDetail(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogame/${id}`);
        dispatch({ type: GET_VIDEOGAME_DETAIL, payload: response.data });
    }
}
export function searchByName(name) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        dispatch({ type: SEARCH_BY_NAME, payload: response.data });
    }
}


export function filterByGenres(genre) {
    return { type: FILTER_BY_GENRES, payload: genre };
}

export function sortByAlphabet(payload) {
    return { type: SORT_BY_ALPHABET, payload: payload };
}

export function sortByRating(payload) {
    return { type: SORT_BY_RATING, payload: payload };
}
export function filterDB(name) {
    return async (dispatch) => {
        
            let response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            console.log(response.data)
            
            return dispatch({ type: FILTER_BY_DB, payload: response.data });
            
}
}
            
