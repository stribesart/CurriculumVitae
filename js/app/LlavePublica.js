import { Boton } from "../componentes/Boton.js";
import { MuestraLlavePublica } from "./MuestraLLavePublica.js";

export function LlavePublica(){
  const contenido = document.getElementById("contenido");
  const contenedor = document.createElement("div");
  
  contenedor.appendChild(Boton({
    "name": "llave",
    "clases": "btn btn-ligth",
    "texto": `<i class="fas fa-key"></i> Mi Llave Publica`,
    "funcionClick": MuestraLlavePublica
  }));

  contenedor.className = "boton-llave"
  contenido.innerHTML = null;
  contenido.appendChild(contenedor);
}