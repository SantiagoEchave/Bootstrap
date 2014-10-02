$(document).ready(function(){

    var $capa = $("article");
    var $varita = $("#tab-1")
    $capa.hide();
    $varita.show();
    
    $("ul li a").on("click",function(e){
        e.preventDefault();
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        
        var piedra = $(this).attr("href");
        console.log(piedra);
        $("article").hide();
        $("article"+piedra).fadeIn();
        
    });
    
    
    
    
});
//    


//Ocultar el Ul
//    $("ul").hide();
//    //Apuntar en el DOM click img
//    $(".pete").click(function(e){
//        e.preventDefault();
//        $("ul").slideToggle();
//    });
//
//
////    $(".FirstCont").prepend("<p>Ahhh sos normal?</p>");
//    $(".FirstCont").append("<p>Ahhh sos normal?</p>");




//var light = $(".transparencia, .box_principal");
//    light.hide();
//    $(".open_button").click(function(e){
//        e.preventDefault();
//        light.fadeIn();
//    });
//    $(".click").click(function(e){
//        e.preventDefault();
//        light.fadeOut();
//    });
//    var anchoVentana =$(window).width();
//    var altoVentana = $(window).height();
//    console.log(anchoVentana,altoVentana);
//    var anchoModal = $(".box_principal").width();
//    var altoModal = $(".box_principal").height();
//    console.log(anchoModal, altoModal);
//    var posicionSide = (anchoVentana-anchoModal)/2;
//    console.log(posicionSide)
//    var posicionHeight = (altoVentana-altoModal)/2;
//    
//    $(".box_principal").css("top",posicionHeight);
//    $(".box_principal").css("left",posicionSide);
//























