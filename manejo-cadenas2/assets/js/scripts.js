$(document).ready(function(){
    $("#contar").click(function(){
        //almacenamos el valor del textarea en la variable texto
       let texto = $("#texto").val();
       //contamos los carácteres y los almacenamos 
       let longitud = texto.length;
       $("#resultado").text("la cantidad de caracteres son: " + longitud);
    });

    $("#mayusculas").click(function(){
    
       let texto = $("#texto").val();
       let mayusculas = texto.toUpperCase();
        
       $("#resultado").text(mayusculas);
      
    });

    $("#minusculas").click(function(){
    
       let texto = $("#texto").val();
       let minusculas = texto.toLowerCase();
       
       $("#resultado").text(minusculas);
      
    });
    
    
});