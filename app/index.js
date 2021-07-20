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
// Se usa para separar cada elemento de un vector o arreglo e insertar cada dicho elemento en un nuevo lugar.
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
  