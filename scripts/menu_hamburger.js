const d = document;
const panel = d.querySelector('.panel');
const gun = d.querySelector('.gun');

export default function hamburger(btn) {
    
    d.addEventListener('click', (e)=> {

        if (e.target.matches(btn) || e.target.matches(`${btn} *`) || e.target.matches('.items') || e.target.matches('.items *')) {
            
            panel.classList.toggle('is-active');

        }
    })
}