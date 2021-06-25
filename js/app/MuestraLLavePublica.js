export function MuestraLlavePublica(){
  return `
    <div>
      <div>
        <textarea name="" id="llavePublica" cols="50" rows="10" disabled></textarea>
      </div>
      <button type="button" class="btn" id="redirecciona">
        <a href="http://127.0.0.1:5500/index.html">Practica Firma Digital</a>
      </button>
    </div>
  `;
}