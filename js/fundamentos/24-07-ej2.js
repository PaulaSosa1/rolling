const productosSupermercado = [
    {
      nombre: "Arroz",
      detalle: "Arroz de grano largo, 1kg",
      stock: 20,
      precio: 350,
      marca: "Gallo",
    },
    {
      nombre: "Leche",
      detalle: "Leche descremada, 1L",
      stock: 30,
      precio: 437.5,
      marca: "La Serenisima",
    },
    {
      nombre: "Huevos",
      detalle: "Huevos frescos, docena",
      stock: 20,
      precio: 1000.80,
      marca: "Doña Lala",
    },
    {
        nombre: "Pan Lactal",
        detalle: "Pan lactal integral, 350gr",
        stock: 40,
        precio: 750,
        marca: "Fargo",
      },
      {
        nombre: "Queso",
        detalle: "Queso X Kg",
        stock: 15,
        precio: 200.000,
        marca: "La Paulina",
      },
      {
        nombre: "Fideos",
        detalle: "Fideos Tirabuzon, 500gr",
        stock: 25,
        precio: 242,
        marca: "Luchetti",
      },
      {
        nombre: "Cereal",
        detalle: "Cereal de maíz, 330g",
        stock: 35,
        precio: 1.330,
        marca: "Trix",
      },
      {
        nombre: "Galletitas Merengadas",
        detalle: "Galletas de frutillas, paquete de X88gr",
        stock: 30,
        precio: 193.47,
        marca: "Bagley",
      },
      {
        nombre: "Aceite",
        detalle: "Aceite de oliva, 1.5L",
        stock: 20,
        precio: 573,
        marca: "Natura",
      },
      {
        nombre: "Jabón",
        detalle: "Jabón tocador, 90g",
        stock: 15,
        precio: 331,
        marca: "Dove",
      },
    
];
// mostrar lista de productos con nombre, detalle y precio
function listaProductosSupermercado() {
    console.log("Lista de productos en el supermercado:");
    productosSupermercado.forEach((producto) => {
      console.log(`Nombre: ${producto.nombre}`);
      console.log(`Detalle: ${producto.detalle}`);
      console.log(`Precio: $${producto.precio}`);
      console.log("------------------------");
    });
  }
  listaProductosSupermercado();