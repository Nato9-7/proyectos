
$(function(){
    $("#btn-length").on("click", function(){
        let caracteres = $("#contenedor").text().length;
        $("#resultado").text("El total de caracteres: " + caracteres);
    });

    $("#btn-mayusculas").on("click", function(){
        let mayusculas = $("#contenedor").text().toUpperCase();
        $("#contenedor").text(mayusculas);
    });

    $("#btn-minusculas").on("click", function(){
        let minusculas = $("#contenedor").text().toLowerCase();
        $("#contenedor").text(minusculas);
    });
});