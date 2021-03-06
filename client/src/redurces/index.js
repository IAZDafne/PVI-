  export let FILTER_BY_GENRES ='FILTER_BY_GENRES'
 export let FILTER_BY_NAME = 'FILTER_BY_NAME'
export  let GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export  let  GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL'
 export let SEARCH_BY_NAME ='SEARCH_BY_NAME'
 export let SORT_BY_ALPHABET = ' SORT_BY_ALPHABET '
export  let SORT_BY_RATING  = 'SORT_BY_RATING '
export let FILTER_BY_DB='FILTER_BY_DB'



const initalState = {
    videogames: undefined,
    copyVideogames: undefined,
    videogameDetail: undefined
}
function rootReducer(state = initalState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES: return {
            ...state,
            videogames: action.payload,
            copyVideogames: action.payload
        };
        case SEARCH_BY_NAME: return {
            ...state,
            videogames: action.payload,
            copyVideogames: action.payload
        }
        case GET_VIDEOGAME_DETAIL: return {
            ...state,
            videogameDetail: action.payload
        }
        
        case FILTER_BY_GENRES: {
            if (!action.payload) return { ...state, videogames: state.copyVideogames };
            return {
                ...state,
                videogames: state.copyVideogames.filter(e => e.genres.includes(action.payload))
            }
        }
        case SORT_BY_ALPHABET: {
            if (!action.payload) return { ...state, videogames: [...state.videogames].sort((a, b) => a.added < b.added ? 1 : -1) }
            if (action.payload === 'az') return { ...state, videogames: [...state.videogames].sort((a, b) => a.name > b.name ? 1 : -1) }
            return { ...state, videogames: [...state.videogames].sort((a, b) => a.name > b.name ? -1 : 1) }
        }
        case SORT_BY_RATING: {
            if (!action.payload) return { ...state, videogames: [...state.videogames].sort((a, b) => a.added < b.added ? 1 : -1) }  
            if (action.payload === 'high') return { ...state, videogames: [...state.videogames].sort((a, b) => a.rating > b.rating ? -1 : 1) }
            return { ...state, videogames: [...state.videogames].sort((a, b) => a.rating > b.rating ? 1 : -1) }
        }
      

        case FILTER_BY_DB: {
            const databasefilter =action.payload === 'created'? state.copyVideogames.filter(
                videogames => videogames.status): state.copyVideogames.filter(
                    videogames => videogames.status)
            return{
                ...state,
                videogames:databasefilter}

        }
    
            
        default: return state;
    }
}

export default rootReducer;