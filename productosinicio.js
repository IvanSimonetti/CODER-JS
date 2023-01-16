//Renderizo productos.

let contenedor = document.getElementById("contProductos");

//Cargar Json productos.
fetch('../productosinicio.json')
  .then(response => response.json())
  .then(productos => {
    for(const producto of productos){
      let li = document.createElement("li");
      li.innerHTML = `
                      <div class="col-12 col-md-6">
                      <div class="item shadow mb-4">
                      <div class=${producto.pos}>
                      <h3 class="item-title">${producto.nombre}</h3>
                      <p class="item-price">$${producto.precio}</p>
                      <img class="item-image" src=${producto.img}></img>
                      <button type="button" id="${producto.boton}" class="item-button btn btn-primary addToCart">Comprar</button>
                      </div>
                      </div>
                      </div>`;
      contenedor.append(li);
    };
    //Guardamos en el localStorage los productos.
    localStorage.setItem("productos", JSON.stringify(productos));

  //Cargamos botones

  let botonUno = document.getElementById("botonCompraInicioUno");
  botonUno.addEventListener("click",compraArticuloInicio);

  let botonDos = document.getElementById("botonCompraInicioDos");
  botonDos.addEventListener("click",compraArticuloInicio);

  let botonTres = document.getElementById("botonCompraInicioTres");
  botonTres.addEventListener("click",compraArticuloInicio);
  
  //Redirigimos a productos.
  
  function compraArticuloInicio(){
    if((botonUno) || (botonDos) || (botonTres)){
      location.replace('../html/productos.html');
    }
  }
});