  
import React from 'react';
import './pag.css'

function Pagination({ gamesPerPage, totalGames, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className='pag-completa'>
            <ul className='pag'>
                {pageNumbers.map(n => (
                    <li key={n} className='page'>
                        <button onClick={() => paginate(n)} className='pag-link'>
                            {n}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;