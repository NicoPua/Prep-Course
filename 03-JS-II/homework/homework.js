// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;  
  } else if (y > x) {
    return y;
  }else{
    return x;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed";
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1){
    return 'Online';      //Online
  } else if (status === 2){
    return 'Away';      //Away
  } else {
    return 'Offline';      //Offline
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma == 'aleman'){
    return "Guten Tag!";
  } else if(idioma == 'mandarin'){
    return "Ni Hao!";  
  } else if(idioma == 'ingles'){
    return "Hello!";
  } else {
    return "Hola!";
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case 'red': return "This is red";               
    case 'blue': return "This is blue";
    case 'green': return "This is green";
    case 'orange': return "This is orange";            
    default: return "Color not found";
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero == 10 || numero == 5) {
    return true;
  } else {
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  } else {
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var num2;
  num2 = Math.floor(numero);
  if (num2 == numero) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var Cuenta1,Cuenta2;

  Cuenta1 = numero % 3;
  Cuenta2 = numero % 5;
  if (Cuenta1 == 0 && Cuenta2 == 0) {
    return 'fizzbuzz';
  } else if (Cuenta1 == 0){
    return 'fizz';
  } else if (Cuenta2 == 0){
    return 'buzz';
  } else {
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  var text1, suma;

  if (num1 < 0 || num2 < 0 || num3 < 0){
    text1 = "Hay negativos";
    return text1;
  } else if (num1 == 0 || num2 == 0 || num3 == 0){
      text1 = "Error";
      return text1;
  } else if (num1 > num2 && num1 > num3 && num1 > 0){
      text1 = "Número 1 es mayor y positivo";
      return text1;
  } else if (num3 > num1 && num3 > num2){    
      suma = num3 + 1;
      return suma;
  } else {
      return false;
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var i, Resultado, cont = 0;;

  for (i = numero; i > 0 ;i--) {
    Resultado = numero % i; 
    if(Resultado == 0){
      cont++;
    }   
  }
  if (cont == 2) {
    return true;
  }else{
    return false;
  }
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  var text1;

  if (valor == true) {
    text1 = 'Soy verdadero';
    return text1;
  } else if(valor == false) {
    text1 = 'Soy falso';
    return text1;
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  
  /*
  var Resultado,i;                      //PREGUNTAR PORQUÉ NO FUNCIONA
  let tabla=[0,0,0,0,0,0,0,0,0,0];
  
  for (i = 0; i < 10 ; i++) {
    Resultado = 6 * (i+1);
    Resultado = tabla[i];
  }
  return tabla;*/

  let i,tabla = [];
  for (i = 0; i < 11; i++) {
        tabla.push(6 * i)
  }
  return tabla;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero > 99 && numero < 1000) {
    return true;
  } else {
    return false;
  }
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  
  /*var cont=1,Resultado;
  let Suma = [0,0,0,0,0,0,0,0]

  while (cont < 9) {                //PREGUNTAR PORQUÉ NO FUNCIONA.
    Suma[0] = numero + 5;
    Resultado = Suma [cont-1];
    Suma [cont] = Resultado + 5;
    
    if (cont == 8) {
      return Suma; 
    }
    cont++;
  }*/

  var Resultado = numero;
  var i = 0;
  do {
    i++;
    Resultado = Resultado + 5;
  }
  while(i < 8);
  return Resultado;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
