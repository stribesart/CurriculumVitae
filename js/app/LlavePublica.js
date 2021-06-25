import { MuestraLlavePublica } from "./MuestraLLavePublica.js";

export function LlavePublica(){
  const contenido = document.getElementById("contenido");
  const contenedor = document.createElement("div");

  contenedor.innerHTML = MuestraLlavePublica();

  contenedor.className = "boton-llave"
  contenido.innerHTML = null;
  contenido.appendChild(contenedor);

  const llavePublica = new JSEncrypt();
  const pubk = document.getElementById("llavePublica");
  
  pubk.innerText = llavePublica.getPublicKey();
  const privk = new Blob([llavePublica.getPrivateKey()], {type: "text/plain;charset=utf-8"});
  // FileSaver
  saveAs(privk, "LlavePrivada.txt");
}