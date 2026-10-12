//Aqui arriba hay que añadir cosas pero para un futuro


let form = document.querySelector("#formulario");


form.addEventListener("submit", (e) => {

//aqui frenamos el envio
e.preventDefault();



//aqui empezamos a trabajor con las validaciones

let nomApe = document.querySelector("#nombreape").value.trim();
let dni = document.querySelector("#dni").value.trim();



if (nomApe=== '' || nomApe.length < 3) {
  alert('Nombre inválido');
  return;
}

if (dni.length < 7 || dni.length > 8 || isNaN(dni)) {
  alert('DNI inválido');
  return;
}


});