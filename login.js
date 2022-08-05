//Declaro variables para el login

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit",form);

const clave = document.getElementById("claveEntrada").value;               

const usuario = document.getElementById("usuarioEntrada").value;

const mensaje = document.getElementById("datos");

//funcion logeo

function form(e){
    e.preventDefault();
    if(e.target.children[0].value.includes((("@") || ("+") || ("-") || ("*") || ("/")))) {
        mensaje.innerHTML = "<div>No es un usuario valido</div>";
        mensaje.className = "rojo";
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'No ingresaste un usuario',
                footer: '<a href="index.html">Volver a ingresar</a>'
            })
    }else{
        const texto = `Usuario: ${e.target.children[0].value} , Clave: ${e.target.children[1].value}`;
        mensaje.innerHTML = `<h1>Bienvenido a Quizatech, ${texto}</h1>`;
        mensaje.className = `azul`;
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
            title: 'Ingresaste correctamente'
          })
        sessionStorage.setItem("usuario", JSON.stringify ({"nombre":e.target.children[0].value,"clave":e.target.children[1].value}));
    }    
}