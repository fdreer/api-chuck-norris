const d = document;

export default async function obtenerCategorias(endpoint) {
    
    try {
        
        const res = await fetch(endpoint);
        const json = await res.json();

        // console.log(res);
        console.log(json);

        if (!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        }

        pintarCategorias(json);

    } catch (err) {
        
        const message = err.statusText || 'Ocurrio un error';
        console.log(`Error ${err.status}, ${message}`);
    }
}

function pintarCategorias(json) {
    
    const navBar = d.querySelector('.nav-bar');

    json.forEach(categoria => {
        
        // let template = `<li class="items"><a class="links" href="">${categoria}</a></li>`;
        // navBar.appendChild(template);

        navBar.innerHTML += //html
        `<li class="items"><a class="links" href="">${categoria}</a></li>`;
    });
}