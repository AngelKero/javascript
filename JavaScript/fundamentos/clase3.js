var edad = 27

edad += 1

var peso = 75

peso -= 2

var sandwich = 1

peso = peso + sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precio = 200.3

var total = Math.round(precio * 100 * 3) / 100
//redondear una cantidad con Math.round()
var totalStr =  total.toFixed(2)
//toFixed(n) para tomar en cuenta n cantidad de decimales que queremos
var total2 = parseFloat(totalStr)
//parsear de un string a un float (convertir de texto a numero decimal)

var pizza = 8
var persona = 2
var cantidad = pizza / persona