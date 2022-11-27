const d = document;

export function pintarJoke(json) {

    if (d.querySelector('.joke') == null) {
        
        const parraf = d.createElement('p');
        parraf.textContent = json.value;
        parraf.classList.add('joke');
    
        d.querySelector('.container-joke').appendChild(parraf);
    } else {

        d.querySelector('.joke').textContent = json.value;
    }
}

export function pintarError(err) {
    const message = err.statusText || 'Ocurrio un error';

    if (d.querySelector('.error') == null) {
        const parraf = d.createElement('p');
        parraf.textContent = `Error ${err.status}, ${message}`;
        parraf.classList.add('joke');
        parraf.classList.add('error');
    
        d.querySelector('.container-joke').appendChild(parraf);

    } else {
        d.querySelector('.error').textContent = `Error ${err.status}, ${message}`;
    }
}