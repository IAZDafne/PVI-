import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameDetail } from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import Rutahome from '../rutahome/Rutahome'
import Espera from '../espera/Espera'
import { useParams } from 'react-router-dom';
import './detalles.css'



function GameDetail() {
    const dispatch = useDispatch();
    const params = useParams();
    const { idVideogame } = params
    const videogameDetail = useSelector(state => state.videogameDetail)

    useEffect(() => {
        dispatch(getVideogameDetail(idVideogame))
    }, [dispatch, idVideogame])

    return (
        
        <div className='todo-detalle' >
            <Rutahome/> 
            <Navbar />
            <div className='detalle'>
                <div className='detalles'>
                    {videogameDetail ? <div>
                        <h3 className='titulo-detalle'>{videogameDetail.name}</h3>
                        <img src={videogameDetail.background_image} className='img-dettalle' />
                        <p className='descripcion-detalle'>{videogameDetail.description.replace(/(<([^>]+)>)/ig, '')}</p>
                        <p className='demas'>{`Genre: ${videogameDetail.genres.join(', ')}`}</p>
                        <p className='demas'>{`Platforms: ${typeof videogameDetail.platforms === 'string' ? videogameDetail.platforms : videogameDetail.platforms.join(', ')}`}</p>
                        <p className='demas'>{`Release Date: ${videogameDetail.releaseDate || 'None'}`}</p>
                        <p className='demas' >{`Rating:  ${videogameDetail.rating}`}</p>

                    </div> : <Espera/>}
                </div>
            </div>
        </div >
        
    )
}

export default GameDetail;