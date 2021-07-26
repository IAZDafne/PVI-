import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { searchByName } from '../../actions/index';
//import '../../App.css'
import './Navbar.css'

function Navbar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        // dispatch(filterByName(e.target.value))
        setInput(e.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchByName(input));
        setInput('')
       
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
          
         <NavLink exact to="/" className="logo">
                        YAOTZIN.GAMES
                       
                    </NavLink>
                    
            
                    <form className='form' >
                        <input onChange={handleInput} value= {input} type="text" placeholder='VIDEOJUEGO' spellCheck='false' className='inputBuscar' />
                        <button className='botongueradar'onClick={handleSearch}>BUSCAR</button>
                    </form>  
              
        </>
    )
}

export default Navbar;