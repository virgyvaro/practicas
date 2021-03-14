//Actividad 4

function evaluar() {
    var valor = document.getElementById('num').value;
    if (valor % 2 == 0) {
        document.getElementById("resultado").innerText = `Tu número ingresado es par`; 
    } else {
        document.getElementById("resultado").innerText = `Tu número ingresado es impar`; 
    }
}