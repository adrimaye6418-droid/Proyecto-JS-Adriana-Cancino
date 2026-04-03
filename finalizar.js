/* formulario dinamico - Finalizar compra*/

const botonComprar = document.getElementById("finalizoCompra");
const botonFinCompra = document.getElementById('btnFinCompra');



if (botonComprar) {
    botonComprar.addEventListener("click", function () {
        const formularioCompra = document.getElementById("formCompra");
        if (formularioCompra) formularioCompra.hidden = false;
    });
}

if (botonFinCompra) {
    botonFinCompra.addEventListener('click', async function () {
            //Confirmacion de compra con sweet alert
            const botonFinCompra = await Swal.fire({
                title: "¿Desea finalizar la compra?",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Sí, finalizar compra",
                cancelButtonColor: "rgb(221, 51, 51)",
                cancelButtonText: "No, cancelar"
            });
            if (botonFinCompra.isConfirmed) {
                await finalizarCompra();
                Swal.fire("Compra finalizada", "", "success");
            }
        });
}           
                
function finalizarCompra() {
    localStorage.clear();
    location.reload();
    };







      