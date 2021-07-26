import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByGenres, sortByAlphabet, sortByRating } from '../../actions/index';
import './filtros.css'



function Filters() {
    const dispatch = useDispatch();
    const handleFilter = (e) => {
        dispatch(filterByGenres(e.target.value));
    }
    const handleAlphabet = (e) => {
        dispatch(sortByAlphabet(e.target.value));
    }
    const handleRating = (e) => {
        dispatch(sortByRating(e.target.value));
    }
    return (
        <div className='todosfiltros'>
            <div className='filtroGeneros'>
                <label htmlFor="genres">
                    <span > GENEROS </span>
                </label>
                <select id='genres' onChange={handleFilter} className='selectGeneros'>
                    <option value=''>Default</option>
                    <option value="Action">Action</option>
                    <option value="Indie">Indie</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Casual">Casual</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Racing">Racing</option>
                    <option value="Massively Multiplayer">Massively Multiplayer</option>
                    <option value="Sports">Sports</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Family">Family</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Educational">Educational</option>
                    <option value="Card">Card</option>
                </select>
            </div>
            <div className='filtroAlfabeto'>
                <label htmlFor="order">
                    <span >A-Z</span>
                </label>
                <select id="order" onChange={handleAlphabet} className='selectAlfabeto'>
                    <option value="">Default</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
            <div className='filtroRaiting' >
                <label htmlFor="orderRating">
                    <span >RAITING </span>
                </label>
                <select id="orderRating" onChange={handleRating} className='selectRaitng' >
                    <option value="">Default</option>
                    <option value="high">Highest Rated ★</option>
                    <option value="less">Less Rated ☆</option>
                </select>
            </div>
            
        </div>
    )
}

export default Filters;