export function Boton(AJson) {
  const {
      name,
      value,
      type,
      disabled,
      accesskey,
      clases,
      atributos,
      texto,
      funcionClick
  } = AJson;
  const $boton = document.createElement("button");
  if (name) {
      $boton.id = `id-${name}`;
      $boton.name = name;
  }
  if (type) $boton.type = type;
  if (disabled) $boton.disabled = disabled;
  if (accesskey) $boton.accessKey = accesskey;
  if (clases) {
      $boton.className = clases;
  } else {
      $boton.className = "btn btn-secondary";
  }
  if (atributos) {
      atributos.forEach(elemento => {
          $boton.setAttribute(elemento.atributo, elemento.valor);
      });
  }
  if (texto) $boton.innerHTML = texto;
  $boton.addEventListener("click", funcionClick);

  return $boton;
}