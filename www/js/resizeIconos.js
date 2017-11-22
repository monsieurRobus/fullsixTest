// Función básica para ajustar tamaño de imagenes del menú superior
var anchoCeldaFijo = 55;
var iconosMenu = document.getElementsByClassName("icono");

// RECORREMOS EL ARRAY DE ICONOS Y VAMOS AJUSTANDO EL TAMAÑO DE LA IMAGEN CON EL
// DE SU CELDA "SPAN"
// Para ello realizamos una simple regla de tres y forzamos a que el alto sea siempre
// 55px (sacado del sketch)
for (var i=0 ; i < iconosMenu.length ; i++)
{
  var celda = iconosMenu[i];
  var img = celda.children[0];
  var anchoPrevio = img.offsetWidth;
  var altoPrevio = img.offsetHeight;
  var altoFinal = 55;                 // Alto de celda == Alto de imagen
  var anchoFinal = (altoFinal * anchoPrevio) / altoPrevio;

  celda.style.height=anchoCeldaFijo+"px";
  img.style.height="55px";
  img.style.width=anchoFinal+"px";

}
