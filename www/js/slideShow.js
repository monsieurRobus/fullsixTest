var titularIndex = 1;
mostrarTitular(titularIndex);

function sumarIndex(n) {
  mostrarTitular(titularIndex += n);
}

function titularActual(n) {
  mostrarTitular(titularIndex = n);
}

function mostrarTitular(n) {
  var i;
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
    titulares[titularIndex-1].style.display = "flex";
    elementos[titularIndex-1].className += " active";

}
