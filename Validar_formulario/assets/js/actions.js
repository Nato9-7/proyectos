
jQuery('#formulario').validate({
    rules:{
    name:"required",
    email:{
    required:true,
    email:true
    
    },
    
    
    password:{
    required:true,
    minlength:5
    },
    
    
    },messages:{
    
    name:"POR FAVOR, ESCRIBA SU NOMBRE",
    email:{
    required:"POR FAVOR, INGRESE EL CORREO ELECTRÓNICO",
    email:"POR FAVOR, INGRESE UN CORREO ELECTRÓNICO VÁLIDO",
    },
    
    
    
    password:{
    required:"POR FAVOR, INTRODUZCA SU CONTRASEÑA",
    minlength:"LA CONTRASEÑA DEBE TENER 10 CARÁCTERES"
    },
    },
    
    submitHandler:function(form)
    
    {
    form.submit();
    }
    });
    