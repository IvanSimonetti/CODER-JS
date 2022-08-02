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
    }else{
        const texto = `Usuario: ${e.target.children[0].value} , Clave: ${e.target.children[1].value}`;
        mensaje.innerHTML = "<h1>Bienvenido a Quizatech!</h1>";
        mensaje.className = "azul";
        alert(texto);
        sessionStorage.setItem("usuario", JSON.stringify ({"nombre":e.target.children[0].value,"clave":e.target.children[1].value}));
    }    
}