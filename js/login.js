//Declaro variables para el login

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit",form);

const clave = document.getElementById("claveForm").value;               

const usuario = document.getElementById("usuarioForm").value;

const mensaje = document.getElementById("claveForm");

//funcion logeo

function form(e){
    e.preventDefault();
    if(e.target.children[0].value.includes((("@") || ("+") || ("-") || ("*") || ("/")))) {
        formulario.innerHTML = `No es un usuario valido`;
        formulario.className = 'gris';
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'No ingresaste un usuario',
                footer: '<a href="index.html">Volver a ingresar</a>'
            })
    }else{
        formulario.innerHTML = `${e.target.children[0].value}`;
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: `Bienvenido ${e.target.children[0].value}`
          })
        sessionStorage.setItem("usuario", JSON.stringify ({"nombre":e.target.children[0].value,"clave":e.target.children[1].value}));
    }    
}