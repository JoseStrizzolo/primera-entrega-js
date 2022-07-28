//calcular el importe de cuotas dependiendo del capital, interes y cantidad de cuotas

//insertar datos solicitados
var capital=prompt("Introduzca el capital solicitado");
var interes=prompt("Indique el interes o tasa");
var cuotas=prompt("Introduzca el numero de cuotas");

//se convierten las variables
var c = capital;
var n = cuotas;
var i = interes/100*capital;

c = parseInt(c);
n = parseInt(n);
i = parseInt(i);

//calculos de valor
var cuota = (c + i) / n

//mostramos el resultado
alert ("El capital de "+capital+ " a "+n+ " cuotas e interés anual o tasa de "+interes+"% es de " +cuota+ " cada cuota");
