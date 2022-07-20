
let saludo = document.getElementById("contenedorTitulo");

let menu = prompt("Ingresa el menu deseado");

let contenedorTitulo = document.getElementById("listaProductos");

let parrafo = document.createElement("p");

parrafo.innerHTML = "<p>Productos Quizatech</p>";

contenedorTitulo.append(parrafo);


if(menu === "inicio"){
   saludo.innerHTML = "<h1>Bienvenido al inicio</h1>";
   saludo.className = "gris"; 
}else if(menu === "carrito"){
    saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
    saludo.className = "azul";
}else{ 
    saludo.innerHTML = "<h1>Bienvenido al DOM</h1>";
}





