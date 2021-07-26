import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Pagination from '../paginas/pag';
import Filters from '../filtros/Filtros';
import Game from '../game/Game';
import { useState } from 'react';
import axios from 'axios';
import Espera from '../espera/Espera'
import './Home.css'
import Rutahome from '../rutahome/Rutahome'

function Home() {
    const videogames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15)

    const indexOfLastGame = currentPage * gamesPerPage; // 15
    const indexOfFirstGame = indexOfLastGame - gamesPerPage; // 15 - 15
    const currentGames = videogames?.slice(indexOfFirstGame, indexOfLastGame);
    useEffect(() => {
        const getGenres = async () => await axios.get('http://localhost:3001/Genre');
        getGenres();
    }, [])
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <main className='home'>
            <Rutahome/>
            <Navbar />
            <Filters />
            <div>
                 <div className='games'>
                    {currentGames ? currentGames.map((e, idx) => <Game props={e} key={idx} />) : <Espera />}
                </div> 
                <Pagination gamesPerPage={gamesPerPage} totalGames={videogames?.length} paginate={paginate} />
            </div>
        </main>
    )
}

export default Home;