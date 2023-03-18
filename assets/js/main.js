
/* REFERENCIAS DEL HTML */

const body = document.body;
const hamburger = document.querySelector('.hamburger');
const drop = document.querySelector('.Nav');
const nav = document.getElementById('navBar');
const thumb = document.querySelectorAll('.thumb');
const slider = document.getElementById('contenedor');
const bar = document.querySelectorAll('.bar');
const theme = document.getElementById('checkTheme');
const carrusel = document.getElementById('slider');
const resize = document.getElementById('ms');
const left = document.getElementById('left');
const right = document.getElementById('right');
const cards = document.querySelectorAll('.card');

/* DECLARACIONES DE VARIABLES */

let colorTheme = body.classList;
let contador = 0;
let counter = 0;
let counter2 = 0;
let margin = ['5%', '-200vw','-375vw','-550vw'];
let translate = ['translateY(0)', 'translateY(-100%)', 'translateY(-200%)'];
let translate2 = ['translateY(0)', 'translateY(-100%)', 'translateY(-200%)'];


/* LOCAL STORAGE */


if (localStorage){
    body.classList.replace('light', localStorage.getItem('theme'));
    if (localStorage.getItem('theme')=='dark') {
        theme.classList.add('checked');
    }
        
}


/* FUNCIONES */







const tema = () =>{
    theme.classList.toggle('checked');
    if (body.classList == 'light'){
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', body.classList);
        
        
        
    } else{
        body.classList.replace('dark','light');
        console.log(body.classList);
        localStorage.setItem('theme', body.classList);
        

    }
   

};


const mover = (num) =>{
    slider.style.setProperty("margin-left", margin[num]);
    

};
const mover2 = (num) =>{
    carrusel.style.setProperty("transform", translate[num]);
    
    

};


setInterval(function(){
    slider.style.setProperty("margin-left", margin[contador]);
    
    contador++;
    if (contador == 4) {
        contador = 0;
    }
}, 4000); 

/* EVENTOS */


window.addEventListener('scroll', ()=>{
    nav.classList.toggle('active', window.scrollY>0);
});



hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    drop.classList.toggle('active');
})





