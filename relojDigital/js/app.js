console.log('❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖');
console.log(' Reloj Digital ');
console.log('❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖');

var digital = document.querySelector('#reloj');
console.log(digital);

// clases en JS
// new Date() --> clase de tipo fecha y ya viene en el objeto global
// var fecha = new Date(); 

// console.log(fecha);

// Objetos

function getHours() {
    var fecha = new Date(); 
    // console.log(fecha);
    // Objeto
    var hora = {
        hora: fecha.getHours(),
        minutos: fecha.getMinutes(),
        segundos: fecha.getSeconds()
    }

    // console.log(hora);
    // bactick --> ``
    // notación de punto de los objetos
    digital.innerHTML = `${hora.hora} : ${hora.minutos} : ${hora.segundos}`
}

// Invocar a la función
// getHours();


// Depreciado o viejo, codigo que se ocupa de manera vieja
setInterval(getHours,800);

// Codigo nuevo de js, función de otra función con eso de la fecha
// setInterval(() => {
//     getHours()
// }, 800);