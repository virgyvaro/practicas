// Actividad 3
function calcular() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado = peso / (altura * altura);
    console.log('Tu IMC es: ', resultado);
}