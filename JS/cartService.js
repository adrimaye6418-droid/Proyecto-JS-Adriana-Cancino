/*Funcion para crear tarjetas del carrito*/

function listarProductosCarrito() {
  const memoria = JSON.parse(localStorage.getItem("articulosLocalStorage"));
  const productosCarrito = document.getElementById("productosCarrito");
  if (!memoria) {
      console.log("no hay productos en el carrito");
      productosCarrito.innerHTML += `
      <article class="contenedorCarrito">
      <p class="card-text">El carrito está vacío</p>
      </article>
      `;
  } else {
      memoria.forEach((articulo) => {
        productosCarrito.innerHTML += `
        <article class="contenedorCarrito">
        <img class="img-fluid" src="${articulo.imagen}">
        <div>
        <h3 class="card-title">${articulo.nombre}</h3>
        <p class="card-text">Precio: ${articulo.precio}</p>
        <p class="card-text">Cantidad: ${articulo.cantidad}</p>
        <button class="btn btn-danger" onclick="eliminarProducto(${articulo.id})">Eliminar</button>
        </div>
        </article>
      `;
      });
      actualizarTotales();
  }
}

listarProductosCarrito();

/* Sumar Totales y cantidades */

function actualizarTotales() {
    const memoria = JSON.parse(localStorage.getItem("articulosLocalStorage"));

    let totalCantidad = 0;
    let totalPrecio = 0;

    if (memoria) {
        memoria.forEach(function (articulo) {
            totalCantidad += Number(articulo.cantidad);
            totalPrecio += Number(articulo.precio) * Number(articulo.cantidad);
        });
    }

    const totales = document.getElementById("totales");
    totales.innerHTML = `
    <p>Total Cantidad <span id="cantidad">${totalCantidad}</span></p>
    <p>Total Precio:$ <span id="precio">${totalPrecio}</span></p>
    <button class="finalizarcompra" id="finalizoCompra"> Finalizar Compra</button>
    `;
    totales.hidden = false;
}

/*Eliminar producto del carrito */

function eliminarProducto(id) {
    const memoria = JSON.parse(localStorage.getItem("articulosLocalStorage"));

    const nuevoArray = memoria.filter(function (articulo) {
        return articulo.id != id;
    });

    if (nuevoArray.length === 0) {
        document.getElementById("totales").hidden = true;
        localStorage.clear();
    } else {
        localStorage.setItem("articulosLocalStorage", JSON.stringify(nuevoArray));
    };

    location.reload();
}
