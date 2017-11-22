
var ventajasDesktop = document.getElementById("ventajas-desktop");
var ventajasMobile = document.getElementById("ventajas-mobile");
var ventajasDesktopVisible = false;

$(document).scroll(function(){
  var y = $(this).scrollTop();
  var alturaTotal = document.body.scrollHeight;
  console.log(y);

  if(y>(alturaTotal/3)){

    console.log("hola");
    $(ventajasDesktop).fadeIn("slow");

  }
  // if(y<(alturaTotal*2/3)){
  //
  //   $(ventajasDesktop).fadeOut(400);
  //   ventajasDesktopVisible = false;
  //
  // }

});
