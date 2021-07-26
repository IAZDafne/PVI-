import './App.css';
import React, { useEffect } from 'react';
 import { useDispatch } from 'react-redux';
 import { getVideogames } from './actions/index';
import './App.css';
import Inicio from './components/inicio/Inicio';
import Crear from './components/crear/crear'
import Home from './components/home/Home'
import Detalles from './components/detalles/detalles'
import { Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch])
  return (
    <>
    <Route exact path='/' component={Inicio} />
    <Route exact path='/create' component={Crear} />
    <Route exact path='/videogames' component={Home} />
    <Route exact path='/videogame/:idVideogame' component={Detalles} />
  </>
  );
}

export default App;
