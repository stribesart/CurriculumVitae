import { Boton } from "../componentes/Boton.js";

export function LlavePublica(){
  const contenido = document.getElementById("contenido");
  const contenedor = document.createElement("div");
  
  contenedor.appendChild(Boton({
    "name": "llave",
    "clases": "btn btn-ligth",
    "texto": `<i class="fas fa-key"></i> Mi Llave Publica`
    // "funcionClick": CambiaFiltroEquipos
  }));

  contenedor.className = "boton-llave"
  contenido.innerHTML = null;
  contenido.appendChild(contenedor);
}