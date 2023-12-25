// Variables 

const baseDeDatos = [
  { id: 1, nombre: 'Mermelada de Damasco', precio: 450, imagen: 'Img/Frascodamasco.png' },
  { id: 2, nombre: 'Mermelada de Ciruela', precio: 465, imagen: 'Img/Frascociruela.png' },
  { id: 3, nombre: 'Mermelada de Pera', precio: 430, imagen: 'Img/Frascopera.png' },
  { id: 4, nombre: 'Mermelada de Manzana', precio: 480.50, imagen: 'Img/Frascomanzana.png' }
];

let carrito = [];
const divisa = '$';

// Función para renderizar la base de datos en el HTML
function renderizarProductos() {
  const itemsContainer = document.getElementById('items');

  baseDeDatos.forEach((producto) => {
    const item = document.createElement('div');
    item.className = 'col-md-4';
  
    item.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}">
        <div class="card-body">
          <h4 class="card-title">${producto.nombre}</h4>
          <p class="card-text">Precio: ${producto.precio}${divisa}</p>
          <button onclick="anyadirProductoAlCarrito(${producto.id})" class="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>
    `;

    itemsContainer.appendChild(item);
  });
}

// Función para añadir un producto al carrito
function anyadirProductoAlCarrito(idProducto) {
  carrito.push(idProducto);
  renderizarCarrito();
  console.log(carrito);
}

// Función para renderizar el carrito
function renderizarCarrito() {
  const carritoSinDuplicados = [...new Set(carrito)];
  carritoSinDuplicados.forEach((idItem) => {
    const miItem = baseDeDatos.find((item) => item.id === parseInt(idItem));
    const numeroUnidadesItem = carrito.filter((itemId) => itemId === idItem).length;
 
// Acciones con los objetos de productos en el carrito
    console.log(`${numeroUnidadesItem} x ${miItem.nombre} - ${miItem.precio}${divisa}`);
  });

  console.log('Total:', calcularTotal());
}

// Función para borrar un ítem del carrito
function borrarItemCarrito(idItem) {
  carrito = carrito.filter((itemId) => itemId !== idItem);
  renderizarCarrito();
}

// Función para calcular el total del carrito
function calcularTotal() {
  return carrito.reduce((total, idItem) => {
    const miItem = baseDeDatos.find((item) => item.id === parseInt(idItem));
    return total + miItem.precio;
  }, 0).toFixed(2);
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  renderizarCarrito();
}

// Ejemplos de uso
anyadirProductoAlCarrito(1);
anyadirProductoAlCarrito(2);
renderizarCarrito();
borrarItemCarrito(1);
renderizarCarrito();
vaciarCarrito();





document.addEventListener('DOMContentLoaded', () => {
  renderizarProductos();
});

