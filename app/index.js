console.log( 'Hola webpack' );

console.log( 'Hola a todos en el navegador' );

// Ejemplo de uso de la palabra reservada "Let".
let a = 'FC Barcelona';
console.log( a ); 

{

    let b = 'Chelsea FC';
    console.log( b );

}

// Esta variable no está definida ya que, precisamente, "b" se definió en el alcance del bloque de código de arriba. 
// console.log( b );

// Ejemplo del uso de "const".
const x = 10; 

// Esto no se puede hacer 
// x = 9;

const vector = [ 1, 2, 3 ];

// Con "push" se añade un elemento al vector y se devuelve el tamaño del mismo. 
vector.push(4);

console.log( vector );

// Ejemplo del uso de literales de plantillas
let primero = 'Hola';
let segundo  = 'mundo';

let resultado = `El resultado es: ${primero} ${segundo}`;

console.log( resultado );

// Ejemplo del uso del operador "spread".
// Se usa para separar cada elemento de un vector u objeto e insertar cada dicho elemento en un nuevo lugar (En múltiples variables).
let mi_vector = [ 3, 4, 5 ];

let mi_segundo_vector = [ 1, 2, ...mi_vector, 6 ];

console.log( mi_segundo_vector );

// Se puede usar para descomponer el contenido de un vector y mandarlo como parámetro de una función.
function imprimir( a, b, c ) {

    console.log( a, b, c );

}
let arreglo = [ 1, 2, 3 ];
imprimir( ...arreglo );


// Se puede utilizar para mandar llamar a una función para imprimir algo independientemente del número de parámetros, sólo que es necesario poner el "..." en la declaración de la función. 
function impresion( ...arr ) {

    console.log( arr );

}
impresion ( 1, 2, 3, 4, 5, 6, 7 );


function butter( ...myarr ) {

    // console.log( myarr );

    let a = [1, 2, 3, ...myarr];
    return a;
    
}

butter (4, 5, 6 );
console.log( butter() );

// Ejemplo del uso del operador de desestructuración en vectores.
// Se usa para extraer datos de vectores u objetos en variables separadas. 
let f = [ 100, 200 ];

let [ g, h ] = f;

console.log( g, h );

let fellowship = [ "Frodo", "Gandalf", "Aragorn" ];

let [ hobbit, wizard, ranger ] = fellowship;

console.log( hobbit, wizard, ranger );

let u = [ 100, 200, 300, 400, 500 ];

let [ t, ...v ] = u;

console.log( t, v );

// Ejemplo del uso del operador de desestructuración en objetos.

let mago = { magical: true, power: 10 };

let { magical, power } = mago; 

console.log( magical, power );

// Se puede usar esta forma de desestructuración debido a que así no estamos reasignando un cierto valor al bloque de código. 
let magia = false;
let poder = 9;

let strider = { magia: false, poder: 9 };

( { magia, poder } = strider );

console.log( magia, poder );

// Funciones flecha

setTimeout( () => {

    console.log( 'Hola a todos desde una función flecha' );

}, 1000 );

const blastoff = () => {

    console.log( ' 3...2...1... Blastoff! ' );

}

blastoff();

this.juan = 25; 

/* Aquí se imprime primero el valor de 50 que se muestra en la función normal de JavaScript, luego se imprime el valor de 25 que se muestra en la función flecha.
Esto debido a que la función flecha no hace un enlace de su objeto this como las funciones normales de JavaScript. */
let printJuan = function () {

    this.juan = 50; 
    console.log(' This.juan with normal JavaScript function', this.juan );

}

printJuan();

const printJuanWithArrowFunction = () => {

    console.log( ' This.juan with arrow function ', this.juan );

}

printJuanWithArrowFunction();

/* Función "map".
La función "map" aplica precisamnete otra función a cada elemento de un vector y regresa un vector nuevo con esos cambios (Con los elementos nuevos). */

let points = [ 10, 20, 30 ];

/*let addOne = function ( element ) {

    return element + 1; 


}*/

/*
let addOne = ( element ) => {

    return element + 1;

}*/

/* 
points = points.map( addOne );

console.log( points ); */

points = points.map( ( element ) =>  {

    return element + 1;

});

let lengths = [ 3, 7, 5 ];
let multiple = 8;

const scale = ( element ) => {

  return element * multiple; 

}

lengths = lengths.map( scale );
console.log( lengths );

/* 
const mm = function ( multiplicador ) {

    return lengths.map(multiplicador);

} */ 

/* Función "filter".
Crea y regresa un nuevo vector con los elementos que cumplen la condición dada en el filtro. 
*/

/* let isPassing = ( grade ) => {

    return grade >= 70;

} */ 

/* let scores = [ 90, 65, 30, 87, 53 ];

let passing = scores.filter( ( element ) => {

    element >= 70;

});

console.log( passing ); */ 

let scores = [ 90, 65, 30, 87, 53 ];
let passing = scores.filter( ( element ) => 

    element >= 70

);

console.log( passing );

const averages = [ 6, 15.7, 9, 18, 22.1, 9.2, 4 ];
const highlight = () => {

  return averages.filter( ( element ) => 

    element >= 15

  )

};

console.log( ' Vector con jugadores que tienen más de 15 puntos ', highlight() );

/* Más métodos implementados en ES6:

1.- Find(), que regresa un valor en un vector que pasa una prueba dada.
2.- ForEach(), similar a map(), que llama a una función para cade elemento del vector.
3.- Reduce(), some(), keys(), values(), etc.
*/

const add = ( valueOne, valueTwo ) => {

    return valueOne + valueTwo; 

}

const multiply = () => {

    return valueOne * valueTwo; 


}

// Uso de "export"
// export default add; 

// export { multiply }; 

class Entity {

    constructor( name, height ) {

        this.name = name;
        this.height = height; 

    }

    greet() {

        console.log( `Hello, I'm ${ this.name } from Middle Earth!` );


    }

}

let merry = new Entity( "Merry", 4.8 ); 
merry.greet();
