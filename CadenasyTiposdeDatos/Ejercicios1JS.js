//Ejercicios

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function contarCaracteres(parametro){

    let conversion = String(parametro);

    let longitud = conversion.length

    return longitud

}

//console.log(contarCaracteres("Hola"))

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function cortarCaracteres(parametro, num){

    let conversion = String(parametro);

    let palabraCortada = conversion.substring(0,num)

    return palabraCortada

}

//console.log(cortarCaracteres("Hola Mundo" ,4))

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function pasarStringaArray(parametro){

    let conversion = String(parametro);

    let arreglo = parametro.split(" ");

    return arreglo;

}

//console.log(pasarStringaArray("400 veces 30"))

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirTexto(parametro,num){

    let conversion = String(parametro);

    let cadenaFinal = "";

    for (let i = 0; i < num; i++) {

        cadenaFinal += conversion + " "

    }

    return cadenaFinal;

}

//console.log(repetirTexto("Me Gusta el Pico",10))

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertirPalabra (palabra){

    let palabraInvertida = "";

    if (typeof palabra !== "string") {
        return "El dato ingresado no es una cadena";
    }

    let longitud = palabra.length-1;

    for (let i = longitud; i >= 0; i--) {

        let caracter = palabra[i];

        palabraInvertida += caracter

    }

    return palabraInvertida

}

//console.log(invertirPalabra("Hola"))

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function contarPalabra(texto, palabra){

return texto.split(palabra).length - 1;

}

//console.log(contarPalabra("JavaScript es genial. Me encanta JavaScript, ¡sí, JavaScript!","JavaScript"))

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function polindromo(texto){

    if (typeof texto !== "string") {
        return "El dato ingresado no es una cadena";
    }

    let puntero = texto.length-1;

    let palabraN = "";

    for (let i = puntero; i >= 0; i--) {

        let caracter = texto[i];

        palabraN += caracter
    }

    if (texto === palabraN){

        return "La Palabra Ingresada SI es un Polindromo"

    }

    return "La Palabra Ingresada NO es un Polindromo"

}

//console.log(polindromo("reconocer"))

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

function EliminarPatron(texto, patron){

    const regex = new RegExp(patron, "g");

    return texto.replace(regex, '').trim();

}

//console.log(EliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.