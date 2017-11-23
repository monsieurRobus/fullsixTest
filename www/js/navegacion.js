// ESTE SCRIPT ES SIMILAR AL DE VENTAJAS, cuando llegamos a un determinado
// punto de la interpolación disminuimos su opacidad

//  ::::::::::TARJETA VISIBLE::::::::-------------------:::TARJTETA INVISIBLE
//  0px ----------------------MARCA1-------------------MARCA2--------------|
//  ::::::::::MENÚ OPACO:::::::::::::++++++++++++++++++:::MENÚ VISIBLE::::::

// En este caso lo acemos desde el 85% al final.

var navegacion = document.getElementById("navegacion-mobile");
var anchoVentanaVista = $(window).width();
var flechaIzq = document.getElementById("menu-flecha-izq");
var flechaDer = document.getElementById("menu-flecha-der");
var opacidadIzq = 0;
var opacidadDer = 1;
// Aplicamos opacidad inicial
$(flechaIzq).css({opacity:opacidadIzq});
$(flechaDer).css({opacity:opacidadDer});

$(navegacion).scroll(function(){

  var x =  $(this).scrollLeft();
  var anchura = navegacion.scrollWidth;
  var marca1=anchoVentanaVista*2/9;                   // Marca 1 fade in // slideIn
  var marca2=anchoVentanaVista*3/9;
  var marca3=anchoVentanaVista*4/9;                   // Marca 1 fade in // slideIn
  var marca4=anchoVentanaVista*5/9;

// EXTREMO IZQ
  if(x>marca1)
  {
    if(x>marca2)
    {
      // cuando llega a la segunda marca
      opacidadIzq=1;
      opacidadDer=1;

    }
    else
    {
      // entre la primera y la segunda marca
      opacidadIzq = (1-(marca2-x)/(marca2-marca1));


    }

  }
  else {
    // antes de llegar a la primera marca
    opacidadIzq=0;
    opacidadDer=1;
  }


// EXTREMO DERECHO
  if(x>marca3)
  {
    // Codigo cuando llega a la tercera marca
    if(x>marca4)
    {
      // cuando llega a la cuarta marca
      opacidadIzq=1;
      opacidadDer=0;

    }
    else
    {
      // entre la tercera y la cuarta marca
      opacidadDer = (marca4-x)/(marca4-marca3);

    }

  }


  // // Aplicamos los estilos calculados
  $(flechaIzq).css({opacity:opacidadIzq});
  $(flechaDer).css({opacity:opacidadDer});
});
