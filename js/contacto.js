//Traemos el input con el mail.

let mailContacto = document.getElementById("contactoJs");
mailContacto.addEventListener("submit",envioMail);

let email = document.getElementById("inputEmail");

let comentario = document.getElementById("input");

//Funcion envio de mail.

function envioMail (e){
  e.preventDefault();
  if(mailContacto){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
      })
      Toast.fire({
        icon: 'success',
        title: `Mensaje Enviado`
      })
      //Guardamos en el sessionStorage los mails.
      sessionStorage.setItem("input", JSON.stringify(comentario));
    }else{
      alert("No envio");
    }
}

