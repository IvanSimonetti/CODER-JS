/*Simulador pago en cuotas*/

/*Calcular cuotas sobre un producto determinado*/

let nombreProducto = (prompt("Ingrese el nombre del producto"));

let precio = parseInt(prompt("Ingrese el precio final del producto"));

let cuotas = parseInt(prompt("Ingrese las cuotas a pagar por mes"));

if((cuotas <= 12) && (cuotas > 0)){
    let mensaje = alert(`las cuotas ingresadas son ${cuotas}`);
    let operacion = parseInt(precio / cuotas);
    resultado = alert(`El precio de las cuotas del ${nombreProducto} es de $ ${operacion}`);
    let compra = prompt("Deseas comprar el producto");
    switch(compra){
        case "si":
            alert("El articulo fue comprado con exito");
            alert(`Pagaras ${cuotas} cuotas de $ ${operacion}`);
            break;
        case "no":
            alert("No has comprado el producto, vuelve a intentar");
            break;   
        default:
            alert("No ingresaste una opcion valida");    
    }
}else{
    alert("No ingresaste la cantidad de cuotas");
    alert("El articulo no pudo ser vendido");
}




