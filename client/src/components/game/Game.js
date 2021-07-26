import React from 'react';
import { Link } from 'react-router-dom'
import './Game.css'



function Game({ props }) {
    let { name, background_image, genres, rating, id } = props;
    genres = genres?.join(', ')

    return (
        <div className="flip-card">
        <div  className="flip-card-inner">
            <Link to={`/videogame/${id}`} className='link'>
                <div className='crad'>
                    <div className="flip-card-front">
                <img src={background_image} className='img'/>
                </div>
                <div className="flip-card-back" >
                <h5 className='titulo'>{name}</h5>
                    <span className='raiting'>{`${rating}`}</span>
                    <div className='estrella'>
                        
                    </div>
                  
                    <div className='genres'>
                        {genres}
                    </div>
                    </div>
                </div>
            </Link>
        </div>
        </div>
    );
};
export default Game;