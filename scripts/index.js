import hamburger from "./menu_hamburger.js";
import obtenerJokeRandom from "./fetch_jokes.js";
import obtenerCategorias from "./fetch_categorias.js";
import obtenerJokeCategory from "./fetch_jokeCategory.js";

const d = document;
const urlRandomJoke = 'https://api.chucknorris.io/jokes/random';
const urlCategorias = 'https://api.chucknorris.io/jokes/categories';
const btnJoke = d.querySelector('.btn-joke');

d.addEventListener('DOMContentLoaded', ()=>{

    btnJoke.addEventListener('click', ()=>{

        obtenerJokeRandom(urlRandomJoke);
    })
    obtenerCategorias(urlCategorias);
    
    d.addEventListener('click', (e)=>{
        
        if (e.target.matches('.items') || e.target.matches('.items *')) {
            e.preventDefault();
            obtenerJokeCategory(e.target.textContent);
        }
    })
    hamburger('.btn-hamburger');
})