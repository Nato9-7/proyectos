let expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("#bEnviar").click(function(){
        let nombre = $("#itNombre").val();
        let correo = $("#itMail").val();
        let asunto = $("#itAsunto").val();
        
        if (nombre == "") {
            $("#mensaje1").fadeIn(); //Muestra el mensaje
            return false;
        }else{
            $("#mensaje1").fadeOut(); //Oculta el mensaje
            if (correo == "" || !expr.test(correo)) { //valida el correo y el @ 
                $("#mensaje2").fadeIn();
                return false;
            } else {
                $("#mensaje2").fadeOut();
                if (asunto == "") {
                    $("#mensaje3").fadeIn();
                    return false
                } 
            }
        }
    })
})