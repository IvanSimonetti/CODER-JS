/*Simulador carrito de compras*/

function calculadora(precio1,precio2,operacion){
    if(Number(precio1) && Number(precio2)){
        switch(operacion){
            case "+":
                return precio1 + precio2;

            case "-":
                return precio1 - precio2;

            case "*":
                return precio1 * precio2;

            case "/":
                return precio1 / precio2;

            default:
                alert("Ingresa un operador");
                break;
        
        }   
    }
}

let producto = prompt("Ingrese el nombre del producto a comprar");

let precio1 = parseInt(prompt("Ingrese el precio del primer articulo"));

let precio2 = parseInt(prompt("Ingrese el precio del segundo articulo"));

let operacion = prompt("Ingrese la operacion a realizar");

let resultado = calculadora(precio1,precio2,operacion);

alert(resultado);

/*Objetos y arreglos*/

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

console.log(productos.procesador.includes("Intel"));