import { CargaContenidoCripto } from "./CargaContenidoCripto.js";

export function LlavePublica(){
  const contenido = document.getElementById("contenido");
  const contenedor = document.createElement("div");

  contenedor.innerHTML = CargaContenidoCripto();

  contenedor.className = "boton-llave"
  contenido.innerHTML = null;
  contenido.appendChild(contenedor);
}