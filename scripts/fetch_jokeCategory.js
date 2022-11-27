import {pintarJoke, pintarError} from "./pintar_joke.js";

const d = document;

export default async function obtenerJokeCategory(category) {
    
    try {
        
        const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const json = await res.json();

        if (!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        }

        pintarJoke(json);

    } catch (err) {

        pintarError(err);
    }
}