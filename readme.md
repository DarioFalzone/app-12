# WEEK 12

### Note 📋

folder src > index.js (archivo principal)
folder __test__ > index.test.js (archivo de pruebas)

-Para poder probar los ejercicios:
	Descomentar el ejercicio correspondiente tanto en el archivo index, como en su archivo de test correspondiente.
	Cualquier duda, no dude en ponerse en contacto conmigo :)

# Descripción del problema a resolver
La problemática de la semana 12 consiste en crear ‘Unit Tests’ para todas las funciones que se
encuentran al final de este documento. Se deberá lograr una cobertura del 100% en todos los campos reportados por Jest.

La respuesta a esta problemática debe realizarse en un repositorio nuevo para el código de
automatización de tests, respondiendo con la url de Github del nuevo repositorio.

# PASOS:
	1) Copiar y pegar los ejercicios del final del documento en un archivo JavaScript (.js). Dichos ejercicios serán las funciones a testear.
  	2) Crear un repositorio propio donde subir tanto el archivo .js como los test escritos.
  	3) Lograr una cobertura del 100% de todos los campos de salida de los test (Statements,
  	Branchs, Functions, Lines).

# Ejercicios:
*Copiar y pegar en un archivo JavaScript

//1
const texto = (texto) => {
return texto
}

//2
const suma = (sumandoA, sumandoB) => {
return sumandoA + sumandoB;
}

//3
const resta = (minuendo, sustraendo) => {
return minuendo - sustraendo;
}

//4
const multiplicacion = (factorA, factorB) => {
return factorA * factorB;
}

//5
const division = (dividendo, divisor) => {
if ( divisor === 0) {
return 'No se puede dividir por 0';
} else {
return dividendo / divisor;
}
}

//6
const tablaMultiplicar = (multiplicando, multiplicador) => {
if (multiplicador === undefined) multiplicador = 10;
let table = []
for (let i = 0; i <= multiplicador; i++){
table.push(multiplicando * i)
}
return table
}

//7
const potencia = (base, exponente) => {
return Math.pow(base, exponente)
}

//8
const anidada = (a,b) => {
function cuadrado(x) {
return x * x;
}
return cuadrado(a) + cuadrado(b);
}

//9
const cerosIzq = (num, totalLength) => {
var numStr = num.toString();
var numCeros = totalLength - numStr.length;
for (var i = 1; i <= numCeros; i++) {
numStr = "0" + numStr;
}
return numStr;
}

## Authors ✒️

* [Dario Falzone](https://www.linkedin.com/in/darioflz/)

## Gratitude 🎁

* Many thanks to the RadiumRocket team for the opportunity to be a part. 🤓