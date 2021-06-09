import { Datos } from "../componentes/Datos.js";

export function Contenido(){
  const contenido = document.getElementById("contenido");
  const contenedor = document.createElement("div");
  const boton = document.createElement("button");
  const archivo = document.createElement("div");
  const referencia = document.createElement("a");

  referencia.classList.add("referencia-cv");
  contenedor.classList.add("boton-cv");
  boton.classList.add("btn", "btn-light", "boton-cv");
  boton.id = "boton-cv";
  boton.innerHTML = `<i class="fas fa-file-pdf"></i>`;
  referencia.setAttribute("href", "./pdf/CurriculumVitae.pdf");
  referencia.setAttribute("download", "CV");
  referencia.innerHTML = "Descargar CV";
  archivo.appendChild(referencia);

  boton.appendChild(archivo);
  contenedor.appendChild(boton);
  contenido.innerHTML = null;
  contenido.innerHTML = Datos();
  contenido.appendChild(contenedor);

  return contenido;
}