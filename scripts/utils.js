import membresias from './membresia.js';

export default class Utils {
    constructor(){
        this.memeberships = new membresias();
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    draw(data){
       
        const ball = document.getElementById('pelota');
        ball.style.top = data.y+'px';

        const posicion = document.getElementById('posicion');
        posicion.innerText = data.y;

        const velocidad = document.getElementById('velocidad');
        velocidad.innerText = data.velY;

        const ventilador = document.getElementById('ventilador');
        ventilador.innerText = data.ventilador;

        const objetivo = document.getElementById('objetivo');
        objetivo.innerText = data.objY;
    }

    fuzzification(data){
        let distancia = data.objY - data.posY;

        let centrado = this.memeberships.triangle(distancia, -50, 0, 50);
        let cercaA = this.memeberships.trapezoid(distancia, 30, 90, 130, 190);
        let normalA = this.memeberships.trapezoid(distancia, 130, 170, 250, 290);
        let lejosA = this.memeberships.trapezoid(distancia, 250, 310);

        let cercaB = this.memeberships.trapezoid(distancia, -170, -110, -70, -10);
        let normalB = this.memeberships.trapezoid(distancia, -270, -230, -150, -110);
        let lejosB = this.memeberships.trapezoid(distancia, -290, -230);

        const numerador = centrado*9.8 + cercaA*4 + normalA*2 + lejosA*1 + cercaB*14 + normalB*15.5 + lejosB*18;
        const denominador = centrado+cercaA+normalA+lejosA+cercaB+normalB+lejosB;
        data.ventilador = numerador/denominador;
        return data;
    }
}