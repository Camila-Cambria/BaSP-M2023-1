console.log ('EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de
ambos números en una 3er variable. */

console.log ('Exercise 1-a');
var num1,num2,addition;
num1=10;
num2=4;
addition= num1 + num2;
console.log ('The sum is: ' + addition);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log ('Exercise 1-b');
var  name,surname,fullName;
name='Camila';
surname= 'Cambria';
fullName= name + ' ' + surname;
console.log (fullName);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length)*/

console.log ('Exercise 1-c');
var name,surname,sumFull;
sumFull= name.length + surname.length;
console.log ('The number of letters is: '+ sumFull);
