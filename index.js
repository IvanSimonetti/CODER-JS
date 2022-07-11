/*Simulador pago en cuotas*/

/*Calcular cuotas sobre un producto determinado*/
//
/*
function Productos(nombre,marca,precio,vendido){
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.vendido = false;
};

let producto1 = new Productos("Procesador I9","Intel",3500);

let producto2 = new Productos("Mouse G302","Logitech",3000);

let producto3 = new Productos("Motherboard Z390","Aorus";11000);
*/

const productos = {
    procesador:[
        {nombre:"I9",marca:"Intel",precio:3500},
    ],
    mouse: [
        {nombre:"G302",marca:"Logitech",precio:3000},
    ],
    motherboard:[
        {nombre:"Z390",marca:"Aorus",precio:11000}  
    ],
}

const agregar = productos.procesador.push("vendido" + ":" + false);

const quitar = productos.procesador.pop("vendido" + ":" + false);

console.log(productos);



