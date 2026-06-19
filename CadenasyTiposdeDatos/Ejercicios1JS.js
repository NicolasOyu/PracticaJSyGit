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

console.log(repetirTexto("Me Gusta el Pico",10))