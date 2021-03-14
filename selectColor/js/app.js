console.log('❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖');
console.log(' Practica de Color ');
console.log('❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖');

// var color = document.querySelector('#color');

// color.value --> Obtengo el valoor del input con la propiedad value del elemento color --> es un elemento que obtengo por medio del querySelector mediante el DOM
// console.log(color.value);

function cambioColor() {
    // Pertenece al input para que se visualice como una barrita de color
    var color = document.querySelector('#color');
    console.log(color.value);

    // Escribe el nombre del color en hexadecimal 
    var texto = document.querySelector('#hexadecimal');
    texto.innerHTML = color.value;

    // Cambia el color del div de la línea de código en html 48
    var div = document.querySelector('.colorDiv');
    div.style.backgroundColor = color.value;


    // Cambia el color los iconos línea 36 y 37 de html
    var iconos = document.querySelector('.iconoUno');
    iconos.style.color = color.value;

    var iconos = document.querySelector('.iconoDos');
    iconos.style.color = color.value;
}

// invocar o mandar llamar la función
cambioColor();