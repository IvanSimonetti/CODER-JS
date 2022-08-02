
//DEFINO PRODUCTOS
const productos = [
    { id: 1, nombre:"Procesador",precio: 3500, vendido:false},
    { id: 2, nombre:"Mouse",precio: 3000,vendido:false},
    { id: 3, nombre:"Motherboard",precio: 11000,vendido:false},
];

//Guardamos en el localStorage los productos.
localStorage.setItem("productos", JSON.stringify(productos));

//Cargamos botones

let botonUno = document.getElementById("botonComprauno");
botonUno.addEventListener("click",compraArticulouno);

let botonDos = document.getElementById("botonComprados");
botonDos.addEventListener("click",compraArticulodos);

let botonTres = document.getElementById("botonCompratres");
botonTres.addEventListener("click",compraArticulotres);

//Funciones Compra articulos

function compraArticulouno(){
    if(botonUno){
        alert("Compraste el Procesador correctamente");
        botonUno.innerHTML = "<div><p>El procesador fue vendido con exito</p></div>";
        botonUno.className = "azul";
    }else{
        alert("No pudimos realizar la compra");
    }
}

function compraArticulodos(){
    if(botonDos){
        alert("Compraste el Mouse correctamente");
        botonDos.innerHTML = "<div><p>El mouse fue vendido con exito</p></div>";
        botonDos.className = "azul";
    }else{
        alert("No pudimos realizar la compra");
    }
}

function compraArticulotres (){
    if(botonTres){
        alert("Compraste el Motherboard correctamente");
        botonTres.innerHTML = "<div><p>El motherboard fue vendido con exito</p></div>";
        botonTres.className = "azul";
    }else{
        alert("No pudimos realizar la compra");
    }
}

