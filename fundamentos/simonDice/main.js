const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde   = document.getElementById('verde');

const btnEmpezar = document.getElementById('btnEmpezar');

class Juego{
    constructor(){
        this.iniciar();
        this.generarSecuencia();
    }

    iniciar(){
        btnEmpezar.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(this.nivel).fill(0).map(n => Math.floor(Math.random() * 4))
    }
}

function empezarJuego() {
    window.juego = new Juego();  
}