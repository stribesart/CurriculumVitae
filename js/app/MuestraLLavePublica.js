const llave = new JSEncrypt();

export function MuestraLlavePublica(){
  const privk = new Blob([llave.getPublicKey()], {type: "text/plain;charset=utf-8"});

  saveAs(privk, "LlavePublica.txt");
}