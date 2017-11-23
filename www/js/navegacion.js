// ESTE SCRIPT ES SIMILAR AL DE VENTAJAS, cuando llegamos a un determinado
// punto de la interpolación disminuimos su opacidad

//  ::::::::::TARJETA VISIBLE::::::::-------------------:::TARJTETA INVISIBLE
//  0px ----------------------MARCA1-------------------MARCA2--------------|
//  ::::::::::MENÚ OPACO:::::::::::::++++++++++++++++++:::MENÚ VISIBLE::::::

// En este caso lo acemos desde el 85% al final.

var navegacion = $("navegacion-mobile");

$(document).scroll(function(){

  var y = $(this).scrollLeft();
  var anchura = navegacion.body.scrollWidth;
  var marca1=alturaTotal*2/9;                   // Marca 1 fade in // slideIn
  var marca2=alturaTotal*3/9;                   // Marca 2 fade in // slideIn
  var anclaIzquierda=-100;
  var opacidad=0;
  var offset=0;
  var offsetTarjeta=0;

  if(y>marca1)
  {
    posicionTarjetaY=posicionVentajas+"px";
    if(y>marca2)
    {
      opacidad=1;
      offset="0px";
      offsetTarjeta=posicionTarjetaX+"px";
    }
    else
    {
        opacidad=1-(marca2-y)/(marca2-marca1);
        offset=(1-opacidad)*(anclaIzquierda)+"px";
        offsetTarjeta=posicionTarjetaX+(1-opacidad)*(anclaIzquierda)+"px";
    }

  }
  else {

    posicionTarjetaY=$(this).scrollTop()+$(window).innerHeight()*8/9;
    opacidad=0;
    offset=anclaIzquierda+"px";
    offsetTarjeta=posicionTarjetaX+"px";

  }

  // Aplicamos los estilos calculados
  $(ventajasDesktop).css({opacity:opacidad,left:offset});
  $(flotante).css({opacity:(1-opacidad),top:posicionTarjetaY});

});
