let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroIntentos = 3; 

function asignarTextoElemto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;    
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
    
    if (intentos == numeroIntentos) {
        asignarTextoElemto ('p','No tienes intentos');
    } else {
        
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemto('h1','Felicitaciones!');
            asignarTextoElemto('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
            
            document.getElementById('reiniciar').removeAttribute('disabled'); 
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemto('p', 'El número es menor');
            } else {
                asignarTextoElemto('p', 'El número es mayor');
            }
            intentos ++
            vaciaCaja();
        }
        return;
    }
}

function vaciaCaja() {
    document.getElementById ('valorUsuario') .value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        
        asignarTextoElemto ('p', 'Ya se sortearon todos los números posibles');

    } else {
        
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    vaciaCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function condicionesIniciales() {
    asignarTextoElemto('h1','Juego del número secreto!');
    asignarTextoElemto('p', `Indica un número del 1 al ${numeroMaximo}` );
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();
/*let holaMundo = helloword();

    console.log (holaMundo);

function doble(number) {
    return('Hola mundo');

}*/



