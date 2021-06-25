import { Contenido } from "./Contenido.js";
import { FormacionAcademica } from "./FormacionAcademica.js";
import { Hobbies } from "./Hobbies.js";
import { LlavePublica } from "./LlavePublica.js";
import { MuestraLlavePublica } from "./MuestraLLavePublica.js";

export function Seleccion(e){
  switch (e.target.id){
    case "curriculum":
      Contenido();
      break;
    case "formacionAcademica":
      FormacionAcademica();
      break;
    case "hobbies":
      Hobbies();
      break;
    case "criptografia":
      LlavePublica();
      break;
    case "llave":
      MuestraLlavePublica();
      break;
  }
}