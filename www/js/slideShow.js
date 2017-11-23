


// Temporizador que programa  el movimiento del slider
function temporizador(){
  console.log(titularIndex);
  animacionSlider= setInterval(function(){

    titularIndex++;
    mostrarTitular();
  }
    ,8000);

}

function sumarIndex(n) {
  titularIndex+=n;
  mostrarTitular();

  // Reseteamos el temporizador
  if(animacionSlider){
    clearTimeout(animacionSlider);
    animacionSlider=null;
  }
  temporizador();
}

function titularActual(n) {
  mostrarTitular(titularIndex = n);
  // Reseteamos el temporizador
  if(animacionSlider){
    clearTimeout(animacionSlider);
    animacionSlider=null;
  }
  temporizador();
}

function mostrarTitular() {


  var i;
  n=titularIndex;
  var titulares = document.getElementsByClassName("titular");
  var elementos = document.getElementsByClassName("menu-elemento");
  if (n > titulares.length) {titularIndex = 1}

  if (n < 1) {titularIndex = titulares.length}
  for (i = 0; i < titulares.length; i++) {
      titulares[i].style.display = "none";
  }
  for (i = 0; i < elementos.length; i++) {
      elementos[i].className = elementos[i].className.replace(" active", "");
  }

  if (titularIndex > titulares.length) {titularIndex = 1}
    titulares[titularIndex-1].style.display = "flex";
    elementos[titularIndex-1].className += " active";


}
