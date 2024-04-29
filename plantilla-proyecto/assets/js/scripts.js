$(document).ready(function(){
    $("#mover").click(function(){

        $(".cuadrado").animate({right:'100px'});
        $(".cuadrado").animate({left:'100px'});
        
    });
    $("#agregar-texto").click(function(){
        let newText = "Este texto es agregado con JQuery";
        $("#container").append('<p>' + newText + '</p>');
    })
    
});