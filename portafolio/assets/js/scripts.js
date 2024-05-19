// Cambio de diseño al navbar al scrollear por la pag
window.addEventListener("scroll", function(){
   var header = this.document.querySelector("nav");
   console.log(header);
   header.classList.toggle("sticky", this.window.scrollY > 0);

})

// Ubicación
let coordenada = L.map('map').setView([-41.4757,-72.9327], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(coordenada);

var marker = L.marker([-41.4757,-72.9327]).addTo(coordenada);
marker.bindPopup("😎Puerto Montt, Chile").openPopup();


// Envio de formulario al correo electronico
const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_48ulggk';

 
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'ENVIAR MENSAJE';
        alert('Mensaje enviado correctamente!');
      }, (err) => {
        btn.value = 'ENVIAR MENSAJE';
        alert(JSON.stringify(err));
      });
   
 });
