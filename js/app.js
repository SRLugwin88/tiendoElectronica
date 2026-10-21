//Aqui arriba hay que añadir cosas pero para un futuro


let form = document.querySelector("#formulario");


form.addEventListener("submit", (e) => {

//aqui frenamos el envio
e.preventDefault();



//aqui empezamos a trabajor con las validaciones

let nomApe = document.querySelector("#nombreape").value.trim();
let dni = document.querySelector("#dni").value.trim();
let correo = document.querySelector("#correo").value.trim();


if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,}$/.test(nomApe)) {
  alert('Nombre inválido');
  return;
}

if (dni.length < 7 || dni.length > 8 || isNaN(dni)) {
  alert('DNI inválido');
  return;
}

if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){

alert("correo valido");


}
else{

alert("correo invalido");

}

});



/*Validaciones de tarjetas visa o master card*/



form.addEventListener("submit" ,(e) =>{

  e.preventDefault();

 
let tarjetaValidar = document.querySelector("#numeroTarjeta").value.replace(/\s/g, "");
let cvv = document.querySelector("#cvv").value;


//onst nroCorregido = tarjetaValidar.value.replace(/\s/g, "");

if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(tarjetaValidar)){

   console.log("Tarjeta visa");



}
else if(/^5[1-5][0-9]{14}$/.test(tarjetaValidar)){


  console.log("Tarjeta MasterCard");
}
  else{

console.log("tarjeta desconocida");

  }



  if(/^\d{3,4}$/.test(cvv)){

console.log("cvv valido");

  }
else{

console.log("cvv invalido");


}





});
