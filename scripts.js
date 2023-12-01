const SHEET_ID = "1pq6y-fA88ZJGA-kbianuUpe6Xyeol61lQT68nRhsHn0"

const ACCESS_TOKEN =
"ya29.a0AfB_byDz9_743wTcWY9OERY6mPLbuSJdtkY7J2ISWA6rTMz4iKnB6zyTv-gYWmJqJh5pYyxMf7jFObGBTFyKPmPlCvwF8Wx0P-qnP05HImSHLv7UvIjqUAFXUy_kduioN7saJ_Dev5Mo6uTKvFvQLoJmRz6_Vg5to1GjaCgYKAUUSARMSFQHGX2MisssEslW-CFbDZBpdeqOo1w0171"

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/rutinas!A1:D`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
)
.then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");
    console.log(lista)

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][2];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
});