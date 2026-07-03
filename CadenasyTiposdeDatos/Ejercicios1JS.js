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

function numeroAleatorio(){

    return Math.floor(Math.random() * (600 - 501 + 1)) + 501;

}

//console.log(numeroAleatorio())

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function copicua(num){

    if (typeof num !== "number") {
        return console.log("El Dato Ingresado no es un número");
    }

    let conversion = String(num);

    let puntero = conversion.length-1;

    let palabraN = "";

    for (let i = puntero; i >= 0; i--) {

        let caracter = conversion[i];

        palabraN += caracter
    }

    if (conversion === palabraN){

        return "El Numero Ingresado SI es una Copicua"

    }

    return "El Numero Ingresado NO es una Copicua"

}

//console.log(copicua(2190))

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factorial(num){

    if (num <= 0){

        return console.log("No se Admite el 0 o Numeros Negativos")

    }

    let factorial = num;

    for(let i = num; i > 1; i--){

        factorial = factorial * (i-1)

    }

    return factorial;

}

//console.log(factorial(4))

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function numeroPrimo(num){

  if (num <= 1) return false;
  
  // Comprobamos divisores desde 2 hasta la raíz cuadrada de num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Si hay división exacta, no es primo
    }
  }
  
  return true; // Si no encontró divisores, es primo
}

//console.log(numeroPrimo(9))

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function parInpar (num){

    if (num % 2 === 0){

        return "Ese Numero es Par"

    }

    return "Ese Numero NO es Par"

}

//console.log(parInpar(108766))

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function conversion(temp, tipo){

    let resultado = 0;

    if(tipo === "C"){

       resultado = (temp * (9/5)) + 32

       return resultado

    }
    if (tipo === "F"){

        resultado = (temp - 32) * (5/9)

        return resultado

    }

    return "Tipo de Temperatura NO Valido"

}

//console.log(conversion(32,"F"))

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

function ConversionBinaria(num, tipo){

    let resultado = 0;

    if (tipo === 2){

        let arreglo = num.split('').map(Number).reverse();

        for (let i = 0; i < arreglo.length; i++){

            resultado += arreglo[i] * Math.pow(2,i);

        }

        return resultado;

    }

    if (tipo === 10){

        let arreglo = num.split('').map(Number).reverse();

        for (let i = 0; i < arreglo.length; i++){

            resultado += arreglo[i] * Math.pow(2,i);

        }

        return resultado;

    }

}

//console.log(ConversionBinaria("1111",2))

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

function montoDescuento(precio,descuento){

    return precio - (precio*(descuento/100))

}

//console.log(montoDescuento(1000,20))

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function fecha(fecha){

    let fechaObj = new Date(fecha);

    let fechaHoy = new Date();

    return fechaHoy.getFullYear() - fechaObj.getFullYear() 

}

//console.log(fecha("1984,6,21"))

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

function contarVocalesyCOnsonantes(cadena){

    let texto = String(cadena);

    let numVocales = 0
    let numConsonantes = 0

    for (let letra of texto){

        if(/[aeiou]/.test(letra)){

            numVocales ++

        }else{

            numConsonantes ++

        }

    }

    return "El numero de Voles es " + numVocales + " y el Numero de Consonantes es " + numConsonantes

}

//console.log(contarVocalesyCOnsonantes("Nicolas"))

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function validarNombre(nombre){

    let regexNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s+[a-zA-ZÀ-ÿ\u00f1\u00d1]+)+$/g.test(nombre);

    return regexNombre

}

//console.log(validarNombre("Nicolas Oyuela"))

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
Todos los datos del objeto son obligatorios.
Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
Valida que el título no rebase los 100 caracteres.
Valida que el director no rebase los 50 caracteres.
Valida que el año de estreno sea un número entero de 4 dígitos.
Valida que el país o paises sea introducidos en forma de arreglo.
Valida que los géneros sean introducidos en forma de arreglo.
Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
Crea un método estático que devuelva los géneros aceptados*.
Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
Crea un método que devuelva toda la ficha técnica de la película.
Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/ 