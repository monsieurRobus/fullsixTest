// Función básica para ajustar tamaño de imagenes del menú superior

var iconosMenu = document.getElementsByClassName("icono");

// RECORREMOS EL ARRAY DE ICONOS Y VAMOS AJUSTANDO EL TAMAÑO DE LA IMAGEN CON EL
// DE SU CELDA "SPAN"
for (var i=0 ; i < iconosMenu.length ; i++)
{
  var celda = iconosMenu[i];
  var img = celda.children[0];
  celda.style.height="55px";
  img.style.height="55px";
  img.style.width="auto";

}
