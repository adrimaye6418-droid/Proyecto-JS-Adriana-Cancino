/*LocalStorage*/
const articulos = [
  {
    id: 1,
    nombre: "Remera manga larga",
    precio: 10000,
    imagen: "./img/producto.avif"
  },
  {
    id: 2,
    nombre: "Campera verde",
    precio: 30000,
    imagen: "./img/imagen-venta-2.jpeg"
  },
  {
    id: 3,
    nombre: "Conjunto de invierno",
    precio: 45000,
    imagen: "./img/imagen-venta-3.jpeg"
  },
  {
    id: 4,
    nombre: "Pantalon de invierno",
    precio: 25000,
    imagen: "./img/imagen-venta-4.jpeg"
  }, 
  {
    id: 5,
    nombre: "Blusa de rayas",
    precio: 35000,
    imagen: "./img/imagen-venta-5.jpeg"
  },
  {
    id: 6,
    nombre: "Campera de cuadros",
    precio: 40000,
    imagen: "./img/imagen-venta-6.jpeg"
  },
  {
    id: 7,
    nombre: "Conjunto de invierno",
    precio: 50000,
    imagen: "./img/imagen-venta-7.jpeg"
  },
  {
    id: 8,
    nombre: "Conjunto de invierno",
    precio: 50000,
    imagen: "./img/imagen-venta-8.jpeg"
  },
  ];


/*Funcion para agregar articulos al carrito*/

const botonesComprar = document.querySelectorAll('.mainbutton');

botonesComprar.forEach(boton => {
  boton.addEventListener('click', function(e) {
    const idSeleccionado = e.currentTarget.id;
    const productoSelect = articulos.find(articulo => articulo.id === Number(idSeleccionado));
    agregarAlCarrito(productoSelect);
    Swal.fire("Producto agregado al carrito", "", "success");
  })
});

function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("articulosLocalStorage"));
    if (!memoria) {
        const nuevoProducto = crearNuevoProducto(producto);
        localStorage.setItem("articulosLocalStorage", JSON.stringify([nuevoProducto]));
    }
    else {
        const indiceProducto = memoria.findIndex(articulo => articulo.id === producto.id);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(crearNuevoProducto(producto));
        } else {
            nuevaMemoria[indiceProducto].cantidad++;
        }
        localStorage.setItem("articulosLocalStorage", JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
}

function crearNuevoProducto(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("articulosLocalStorage"));
    if (memoria) {
        const cuenta = memoria.reduce ((acum, current)=> acum+(current.cantidad || 0),0);
        document.getElementById("contadorCarrito").innerText = cuenta;
    }
} 

actualizarNumeroCarrito();



