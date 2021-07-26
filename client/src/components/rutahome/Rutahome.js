import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './rutahome.css'

function Rutahome() {
 
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
          
         <div className='.rutasnavbar'>
             <div className="todo-crear">
                 <Link
                                exact
                                to="/create"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                <h1> Crear</h1>  
                            </Link>
                            </div>
                            <div className='todo-home'> 
                            
                            <Link
                                exact
                                to="/videogames"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                               <h1> Home </h1>
                               <div className='img-home' src='./control3.jpg'></div>
                            </Link>
                            </div>
            </div>
        </>
    )
}

export default Rutahome;