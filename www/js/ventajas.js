
var ventajasDesktop = document.getElementById("ventajas-desktop");
var ventajasCerrar = document.getElementById("ventajas-cerrar");
var ventajasMobile = document.getElementById("ventajas-flotante");
var flotante = document.getElementById("flotante");
var ventajasDesktopVisible = false;
var posicionTarjetaY=$(window).innerHeight()*7/9;
var posicionTarjetaX=$("#flotante")[0].offsetLeft;
var posicionVentajas=$(".ventajas").offsetHeight;
$(flotante).css({top:posicionTarjetaY});

$(document).scroll(function(){

  var y = $(this).scrollTop();
  var alturaTotal = document.body.scrollHeight;
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

// Abrir Emergente
$(flotante).click(function(){
      $(flotante).fadeOut("slow");
      $(ventajasDesktop).fadeOut("slow");
      $(ventajasMobile).css({display:"block",visibility:"visible"}).fadeIn("slow");
    }
);


// Cerrar Emergente
$(ventajasCerrar).click(function(){
    $(flotante).fadeIn("slow");
    $(ventajasDesktop).fadeIn("slow");
    $(ventajasMobile).fadeOut("slow");
  });
