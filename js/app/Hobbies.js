import { Carrusel } from "../componentes/Carrusel.js"

export function Hobbies(){
  const contenido = document.getElementById("contenido");
  const contenedor = document.createElement("div");

  contenido.innerHTML = null;
  contenedor.classList.add("carrusel-div");
  contenedor.innerHTML = Carrusel();
  contenido.appendChild(contenedor);
}