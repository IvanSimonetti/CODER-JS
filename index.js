//Ingresar usuario desde evento submit

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", form);

function form(e){
    e.preventDefault();
    if(e.target.children[0].value.includes((("@") || ("+") || ("-") || ("*") || ("/")))) {
        let mensaje = document.getElementById("formulario")
        mensaje.innerHTML = "No es un usuario valido";
        mensaje.className = "rojo";
    }else{
        console.log(e.target.children[0].value);
        console.log(e.target.children[1].value);
        alert(`Usuario cargado correctamente!`);
    }    
}

//Si ingresan algun simbolo da error

//Ingreso compra por click

const botonCompra = document.getElementById("botonCompra");

botonCompra.addEventListener("click", compra);

function compra(e){
    alert(`Realizaste la compra del producto!`)
}


