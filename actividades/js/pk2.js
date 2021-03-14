// Actividad 2
function area() {
    var lado = document.getElementById('lado').value;
    var resultado = (lado**2);
    document.getElementById("resul").innerText = `El area del cuadrado es: ${resultado}`;
}