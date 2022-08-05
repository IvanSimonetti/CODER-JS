
//DEFINO PRODUCTOS
const productos = [
    { id: 1, nombre:"Procesador",precio: 3500, vendido:false},
    { id: 2, nombre:"Mouse",precio: 3000,vendido:false},
    { id: 3, nombre:"Motherboard",precio: 11000,vendido:false},
    { id: 4, nombre:"Teclado",precio: 110,vendido:false},
    { id: 5, nombre:"Memoria Ram",precio: 4200,vendido:false},
    { id: 6, nombre:"Disco",precio: 7200,vendido:false},
    { id: 7, nombre:"Mousepad",precio:2800,vendido:false},
    { id: 7, nombre:"Pc Armada",precio:70000,vendido:false},
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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
      buttonsStyling: false
    })
          
    swalWithBootstrapButtons.fire({
      	title: 'Atencion',
        text: "Confirmas la compra?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, seguro',
        cancelButtonText: 'No, me arrepiento',
        reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Comprado!',
          'Tu compra a sido aprobada!',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {swalWithBootstrapButtons.fire(
          'Borrado!',
          'Tu compra a sido cancelada',
          'error'
      )}
    })

    botonUno.innerHTML = `<div><p>Vendido</p></div>`;
    botonUno.className = `azul`;
  }else{
    alert("No pudimos realizar la compra");
  }
}

function compraArticulodos(){
  if(botonDos){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
      buttonsStyling: false
    })
          
    swalWithBootstrapButtons.fire({
      	title: 'Atencion',
        text: "Confirmas la compra?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, seguro',
        cancelButtonText: 'No, me arrepiento',
        reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Comprado!',
          'Tu compra a sido aprobada!',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {swalWithBootstrapButtons.fire(
          'Borrado!',
          'Tu compra a sido cancelada',
          'error'
      )}
    })

    botonDos.innerHTML = `<div><p>Vendido</p></div>`;
    botonDos.className = `azul`;
  }else{
    alert("No pudimos realizar la compra");
  }
}

function compraArticulotres (){
  if(botonTres){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
      buttonsStyling: false
    })
          
    swalWithBootstrapButtons.fire({
      	title: 'Atencion',
        text: "Confirmas la compra?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, seguro',
        cancelButtonText: 'No, me arrepiento',
        reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Comprado!',
          'Tu compra a sido aprobada!',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {swalWithBootstrapButtons.fire(
          'Borrado!',
          'Tu compra a sido cancelada',
          'error'
      )}
    })

    botonTres.innerHTML = `<div><p>Vendido</p></div>`;
    botonTres.className = `azul` ;
  }else{
    alert("No pudimos realizar la compra");
  }
}

