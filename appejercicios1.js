let titulo = document.querySelector('h1');
titulo.innerHTML= 'Hora del desafio';

let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

let ciudad = document.querySelector(prompt('input1'));

function intentoDeUsuario() {
    alert('El botón fue clicado');
    console.log (`El botón fue clicado ${ciudad}` );
}



let lenguagesDeProgramacion =[];

lenguagesDeProgramacion.push ('JavaScript', 'C', 'C++', 'Kotlin' , 'Python');

lenguagesDeProgramacion.push ('Java', 'Ruby' , 'GoLang');

function mostarLenguajes () {
    reverso = lenguagesDeProgramacion.reverse();
    console.log (lenguagesDeProgramacion);
    return reverso;
}

mostarLenguajes();
mostarLenguajes('reverso');

function calcularPromedio(lista) {
    if (lista.length === 0) {
        return 0; // Si la lista está vacía, el promedio es 0 para evitar divisiones por cero.
    }

    let sumaTotal = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    let promedio = sumaTotal / lista.length;
    return promedio;
}

// Ejemplo de uso:
let numeros = [5, 10, 15, 20, 25];
let promedio = calcularPromedio(numeros);
console.log("El promedio de los números en la lista es:", promedio);




function encontrarExtremos(lista) {
    // Verificar si la lista está vacía
    if (lista.length === 0) {
        console.log("La lista está vacía.");
        return;
    }

    // Inicializar variables para el número más grande y más pequeño
    let maximo = lista[0];
    let minimo = lista[0];

    // Iterar sobre la lista para encontrar el máximo y el mínimo
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i];
        }
        if (lista[i] < minimo) {
            minimo = lista[i];
        }
    }

    // Mostrar el número más grande y el más pequeño en la consola
    console.log("El número más grande es:", maximo);
    console.log("El número más pequeño es:", minimo);
}

// Ejemplo de uso
const numeros1 = [4, 7, 2, 9, 1, 5];
encontrarExtremos(numeros1);


function encontrarElementos() {
    encontrar = listaEncontrar.indexOf (15);
    console.log (encontrar);
    return encontrar;
}

let listaEncontrar = [1,2,3,4,5,6];

encontrarElementos ();


function sumarListas(lista1, lista2) {
    // Verificar si las listas tienen la misma longitud
    if (lista1.length !== lista2.length) {
        console.log("Las listas no tienen la misma longitud.");
        return null;
    }

    // Inicializar una nueva lista para almacenar la suma de los elementos
    let suma = [];

    // Iterar sobre las listas y sumar los elementos uno a uno
    for (let i = 0; i < lista1.length; i++) {
        suma.push(lista1[i] + lista2[i]);
    }

    return suma;
}

// Ejemplo de uso
const lista1 = [1, 2, 3, 4, 5];
const lista2 = [6, 7, 8, 9, 10];

const resultado = sumarListas(lista1, lista2);
console.log("La suma de las listas es:", resultado);
