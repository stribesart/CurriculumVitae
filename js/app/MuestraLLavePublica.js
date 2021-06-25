export function MuestraLlavePublica(llave){
  const privk = new Blob([llave.getPublicKey()], {type: "text/plain;charset=utf-8"});
  console.log(llave.getPrivateKey())
  saveAs(privk, "LlavePublica.txt");
}