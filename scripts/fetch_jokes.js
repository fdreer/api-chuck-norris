import {pintarJoke, pintarError} from "./pintar_joke.js";

const d = document;

export default async function obtenerJokeRandom(endpoint) {
    
    try {
        
        const res = await fetch(endpoint);
        const json = await res.json();

        console.log(json);

        if (!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        }

        pintarJoke(json);

    } catch (err) {
        
        pintarError(err);
    }
}