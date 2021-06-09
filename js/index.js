import { Seleccion } from "./app/Seleccion.js";
import { BarraNavegacion } from "./componentes/BarraNavegacion.js";
import { Datos } from "./componentes/Datos.js";
import { Footer } from "./componentes/Footer.js";

const cabecera = document.getElementById("cabecera");
const contenido = document.getElementById("contenido");
const pie = document.getElementById("pie");

cabecera.innerHTML = BarraNavegacion();
contenido.innerHTML = Datos();
pie.innerHTML = Footer();

document.addEventListener("click", e => {
  Seleccion(e);
})