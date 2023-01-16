//Renderizo productos.

let contenedor = document.getElementById("contProductos");

//Cargar Json productos.
fetch('../productos.json')
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

  //Cargamos botones

  let botonUno = document.getElementById("botonCompraUno");
  botonUno.addEventListener("click",compraArticulo);

  let botonDos = document.getElementById("botonCompraDos");
  botonDos.addEventListener("click",compraArticulo);

  let botonTres = document.getElementById("botonCompraTres");
  botonTres.addEventListener("click",compraArticulo);

  let botonCuatro = document.getElementById("botonCompraCuatro");
  botonCuatro.addEventListener("click",compraArticulo);

  let botonCinco = document.getElementById("botonCompraCinco");
  botonCinco.addEventListener("click",compraArticulo);

  let botonSeis = document.getElementById("botonCompraSeis");
  botonSeis.addEventListener("click",compraArticulo);

  //Funcion alertas Compra articulos.

  function compraArticulo(){
    if((botonUno) || (botonDos) || (botonTres) || (botonCuatro) || (botonCinco) || (botonSeis)){
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
          showCancelButton: false,
          confirmButtonText: 'Si, seguro',
          reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Comprado!',
            'Tu compra a sido aprobada!',
            'success'
          )      
        }
      })
    }
    }

  //Agregar al carrito y comprar

  const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
  addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
  });

  const comprarButton = document.querySelector('.comprarButton');
  comprarButton.addEventListener('click', comprarButtonClicked);

  const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
  );

  //Agregar Items al carrito
  function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
  }

  function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
      'shoppingCartItemTitle'
    );
    for (let i = 0; i < elementsTitle.length; i++) {
      if (elementsTitle[i].innerText === itemTitle) {
        let elementQuantity = elementsTitle[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          '.shoppingCartItemQuantity'
        );
        elementQuantity.value++;
        $('.toast').toast('show');
        updateShoppingCartTotal();
        return;
      }
    }

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
          <div class="col-6">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${itemImage} class="shopping-cart-image">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-2 mb-0">${itemTitle}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
              </div>
          </div>
          <div class="col-4">
              <div class="shopping-cart-quantity d-flex justify-content-center align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow
      .querySelector('.buttonDelete')
      .addEventListener('click', removeShoppingCartItem);

    shoppingCartRow
      .querySelector('.shoppingCartItemQuantity')
      .addEventListener('change', quantityChanged);

    updateShoppingCartTotal();

  }
  //Actualizar Carrito
  function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
        '.shoppingCartItemPrice'
      );
      const shoppingCartItemPrice = Number(
        shoppingCartItemPriceElement.textContent.replace('$', '')
      );
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
        '.shoppingCartItemQuantity'
      );
      const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
      );
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
  }

  //Sacar item de carrito.
  function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
  }
  //Actualizar precio.
  function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
  }
  //Vaciar carrito
  function comprarButtonClicked() {
    setTimeout(() => {
      shoppingCartItemsContainer.innerHTML = '';
    },2000);

    Swal.fire({
      title: 'Gracias por su Compra!',
      text: 'Pronto recibirá su pedido',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    updateShoppingCartTotal();
  }

});








