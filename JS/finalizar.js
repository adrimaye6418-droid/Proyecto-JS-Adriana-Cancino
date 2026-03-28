/* formulario dinamico - Finalizar compra*/

const botonComprar = document.getElementById("finalizoCompra");
const botonFinCompra = document.getElementById('btnFinCompra');


function finalizarCompra() {
    Swal.fire({
  text: "Compra exitosa",
  icon: "success"
});;
    localStorage.clear();
    location.reload();
}


if (botonComprar) {
    botonComprar.addEventListener("click", function () {
        const formularioCompra = document.getElementById("formCompra");
        formularioCompra.hidden = false;
    });
}

if (botonFinCompra) {
    botonFinCompra.addEventListener('click', function () {
        finalizarCompra();
    });
}



      