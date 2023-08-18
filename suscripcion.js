const suscripcion = document.getElementById("suscripcion")
suscripcion.addEventListener("click", newsletter)
function newsletter () {
  let email = document.getElementById("exampleInputEmail1")
 
  if (email.value && email.value.includes("@")) {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por la suscripción',
        text: 'Con el codigo "boca" obtendras un 20% de descuento en tu compra',
        timer: 4000,
        
      })
     
    }
    email.value =""  
}