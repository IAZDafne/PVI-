import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import Rutahome from '../rutahome/Rutahome';
import './crear.css'

function CreateGame() {
    const [errors, setErrors] = useState({ form: 'Completa el Formulario' });
    const [form, setForm] = useState({
        name: '',
        description: '',
        released: '',
        rating: 0,
        genres: [],
        platforms: '',
        background_image:''
    });

    const handleChange = e => {
        if (e.target.parentNode.parentNode.id === 'genres') {
            
            
            if (e.target.checked) {
                setForm(prevState => ({
                    ...prevState,
                    genres: form.genres.concat(e.target.value)
                }))
            } else {
                setForm(prevState => ({
                    ...prevState,
                    genres: form.genres.filter(x => e.target.value !== x)
                }))
            }
        }
        if (e.target.parentNode.parentNode.id === 'platforms') {
            if (e.target.checked) {
                setForm(prevState => ({
                    ...prevState,
                    platforms: form.platforms.concat(e.target.name)
                }))
            } else {
                setForm(prevState => ({
                    ...prevState,
                    platforms: form.platforms.filter(x => e.target.name !== x)
                }))
            }
        }
        if (e.target.type !== 'checkbox') {
            setForm(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
            
        }))
    }
    const validate = form => {
        let errors = {};
        if (!form.name) {
            errors.name = 'Game Name is required';
        } else if (form.name.length < 4) {
            errors.name = 'Game Name must have at least 4 characters';
        }
        if (!form.description) {
            errors.description = 'Description is required';
        } else if (form.description.length < 8) {
            errors.description = 'Description must have at least 8 characters'
        }
        if (!form.rating) {
            errors.rating = 'Rating is required';
        } else if (!/^[1-5]$/.test(form.rating)) {
            errors.rating = 'Rating must be between 1 and 5';
        }
        
        return errors;
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
       
        
        validate(form);
        let checkboxsErrors = []
        if (form.genres.length < 1) checkboxsErrors.push('Genres is required');
        if (form.platforms.length < 1) checkboxsErrors.push('Platforms is required');
        if (Object.values(errors).length || checkboxsErrors.length) {
            
            return alert(Object.values(errors).concat(checkboxsErrors).join('\n'));
        }

        axios.post('http://localhost:3001/videogame', form)
        alert(`${form.name} created succesfully`)
       
        
    }
    

    return (
        <>
        <div className='todoCrear'>
            <Rutahome/>
            <Navbar />
            <div className='crearas'>
                <div  className='crear'>
                    <h1 className='ttiloCrear'>Agrega tu propio Videojuego</h1>
                    <form onSubmit={handleSubmit} onChange={handleChange} className='formulario' >
                       <div>
                        <label htmlFor='name'>Nombre: </label>
                        <br />
                        <input placeholder='Nombre' type="text" id='name'  name='name' />
                        <br />
                        <label htmlFor="description">Descripción: </label>
                        <br />
                        <textarea name='description' placeholder='Descripción...'  id="description" cols="30" rows="3" />
                        <br />
                        <label htmlFor="date">Fecha de creación: </label>
                        <br />
                        <input name='released'  type="date" id="date" required />
                        <br />
                        <label htmlFor="rating">Rating: </label>
                        <br />
                        <input name='rating'  placeholder=' 1 to 5' type="number" id="rating" min= '1' max='5' maxLength='1' />
                        <br />
                        <label>Imagen del juego</label>
                        <input className={`${errors.background_image && 'danger'}`}
                                 placeholder='Ingrese  una imagen'
                                 type='text'
                                 name='background_image'
                                 value={form.background_image}
                                onChange={handleChange} />
                                 {errors.background_image && (<p className="danger">{errors.background_image}</p>)}
                                 {(form.background_image && !errors.background_image) &&
                        <div className='videogame-imagen' >
                     <img src={form.background_image} alt='Imagen no encontrada' width='100%' id='background_image' />
                    </div>
        }
                        </div>
                        <div id='genres'  className='generos'>
                            <label >Generos </label>
                            <div >
                                <label htmlFor="Action">Action</label>
                                <input name='Action' value='Action' type="checkbox" id="Action" />
                            </div>
                            <div >
                                <label htmlFor="Indie">Indie</label>
                                <input name='Indie' value='Indie' type="checkbox" id="Indie" />
                            </div>
                            <div >
                                <label htmlFor="Adventure">Adventure</label>
                                <input name='Adventure' value='Adventure' type="checkbox" id="Adventure" />
                            </div>
                            <div >
                                <label htmlFor="RPG">RPG</label>
                                <input name='RPG' value='RPG' type="checkbox" id="RPG" />
                            </div>
                            <div >
                                <label htmlFor="Strategy">Strategy</label>
                                <input name='Strategy' value='Strategy' type="checkbox" id="Strategy" />
                            </div>
                            <div>
                                <label htmlFor="Shooter">Shooter</label>
                                <input name='Shooter' value='Shooter' type="checkbox" id="Shooter" />
                            </div>
                            <div>
                                <label htmlFor="Casual">Casual</label>
                                <input name='Casual' value='Casual' type="checkbox" id="Casual" />
                            </div>
                            <div >
                                <label htmlFor="Simulation">Simulation</label>
                                <input name='Simulation' value='Simulation' type="checkbox" id="Simulation" />
                            </div>
                            <div >
                                <label htmlFor="Puzzle">Puzzle</label>
                                <input name='Puzzle' value='Puzzle' type="checkbox" id="Puzzle" />
                            </div>
                            <div >
                                <label htmlFor="Arcade">Arcade</label>
                                <input name='Arcade' value='Arcade' type="checkbox" id="Arcade" />
                            </div>
                            <div >
                                <label htmlFor="Platformer">Platformer</label>
                                <input name='Platformer' value='Platformer' type="checkbox" id="Platformer" />
                            </div>
                            <div >
                                <label htmlFor="Racing">Racing</label>
                                <input name='Racing' value='Racing' type="checkbox" id="Racing" />
                            </div>
                            <div>
                                <label htmlFor="Massively-Multiplayer">Massively-Multiplayer</label>
                                <input name='Massively-Multiplayer' value='Massively-Multiplayer' type="checkbox" id="Massively-Multiplayer" />
                            </div>
                            <div >
                                <label htmlFor="Sports">Sports</label>
                                <input name='Sports' value='Sports' type="checkbox" id="Sports" />
                            </div>
                            <div >
                                <label htmlFor="Fighting">Fighting</label>
                                <input name='Fighting' value='Fighting' type="checkbox" id="Fighting" />
                            </div>
                        </div>
                
                        <div id='platforms'  className='plataformas'>
                            <label >Platformas </label>
                            <div >
                                <label htmlFor="PC">PC</label>
                                <input name='PC' type="checkbox" id="PC" />
                            </div>
                            <div >
                                <label htmlFor="iOS">iOS</label>
                                <input name='iOS' type="checkbox" id="iOS" />
                            </div>
                            <div >
                                <label htmlFor="Android">Android</label>
                                <input name='Android' type="checkbox" id="Android" />
                            </div>
                            <div >
                                <label htmlFor="macOS">macOS</label>
                                <input name='macOS' type="checkbox" id="macOS" />
                            </div>
                            <div >
                                <label htmlFor="PlayStation 4">PlayStation 4</label>
                                <input name='PlayStation 4' type="checkbox" id="PlayStation 4" />
                            </div>
                            <div>
                                <label htmlFor="PlayStation 5">PlayStation 5</label>
                                <input name='PlayStation 5' type="checkbox" id="PlayStation 5" />
                            </div>
                            <div>
                                <label htmlFor="XBOX">XBOX</label>
                                <input name='XBOX' type="checkbox" id="XBOX" />
                            </div>
                            <div>
                                <label htmlFor="PS Vita">PS Vita</label>
                                <input name='PS Vita' type="checkbox" id="PS Vita" />
                            </div>
                        </div>
                        <br />
                        <button  type='submit' className='botoncrear'>Crear</button>
                         </form>
                </div>
            </div>
        </div>
        </>
    )
    
}
export default CreateGame