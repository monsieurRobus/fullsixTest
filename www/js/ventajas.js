
var ventajasDesktop = document.getElementById("ventajas-desktop");
var ventajasCerrar = document.getElementById("ventajas-cerrar");
var ventajasMobile = document.getElementById("ventajas-flotante");
var flotante = document.getElementById("flotante");
var ventajasDesktopVisible = false;
var posicionTarjetaY=$(window).innerHeight()*7/9;
var posicionTarjetaX=$("#flotante")[0].offsetLeft;
var posicionVentajas=$(".ventajas").offsetHeight;

$(flotante).css({top:posicionTarjetaY});


// Mediante la siguiente función interpolamos la opacidad del gráfico de la tarjeta
// de manera que cuando se acerca a la marca 1 es completamente opaca, cuando se
// acerca a la segunda se va desvanenciendo hasta que al llegar a la marca 2 ha desaparecido,
// dejando en su lugar el div de ventajas

//  ::::::::::TARJETA VISIBLE::::::::-------------------:::TARJTETA INVISIBLE
//  0px ----------------------MARCA1-------------------MARCA2--------------|
//  ::::::::::MENÚ OPACO:::::::::::::++++++++++++++++++:::MENÚ VISIBLE::::::

$(document).scroll(function(){

  var y = $(this).scrollTop();
  var alturaTotal = document.body.scrollHeight;
  var marca1=alturaTotal*3.5/9;                   // Marca 1 fade in // slideIn
  var marca2=alturaTotal*4.5/9;                   // Marca 2 fade in // slideIn
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

    posicionTarjetaY=$(this).scrollTop()+$(window).innerHeight()*7/9;
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
      $(ventajasMobile).fadeIn("slow").css({display:"block",visibility:"visible"});
    }
);


// Cerrar Emergente
$(ventajasCerrar).click(function(){
    $(flotante).fadeIn("slow");
    $(ventajasDesktop).fadeIn("slow");
    $(ventajasMobile).fadeOut("slow");
  });
