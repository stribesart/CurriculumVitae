import { Contenido } from "./Contenido.js";
import { FormacionAcademica } from "./FormacionAcademica.js";
import { Hobbies } from "./Hobbies.js";
import { LlavePublica } from "./LlavePublica.js";

export function Seleccion(e){
  if(e.target.id === "curriculum"){
    Contenido();
  }else if(e.target.id === "formacionAcademica"){
    FormacionAcademica();
  }else if(e.target.id === "hobbies"){
    Hobbies();
  }else if(e.target.id === "criptografia"){
    LlavePublica();
  }
}