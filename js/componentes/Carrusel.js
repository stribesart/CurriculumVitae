export function Carrusel(){
  return `
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/hobbie1.jpg" height="400" width="600" class="carrusel-item">
      <div class="carousel-caption d-none d-md-block">
        <h5>Jugar Futbol</h5>
        <p>A lo largo de mi vida he pertenecido a varios equipos de futbol, me gusta hacer deporte, lo hago por competir, saber que gane me apasiona.</p>
      </div>
    </div>
    <div class="carousel-item">
      <video src="./video/hobbie2.mp4" width="640" height="480" autoplay class="carrusel-item"></video>
      <div class="carousel-caption d-none d-md-block">
        <h5>Disfrutar a mis Amigos</h5>
        <p>Esta parte es muy importante por que ademas de que me encanta ser competitivo tambien es bueno simplemente alocarte un dia y disfrutarlo con seres queridos.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/hobbie3.jpeg" height="400" width="600" class="carrusel-item">
      <div class="carousel-caption d-none d-md-block">
        <h5>Viajar.</h5>
        <p>Los viajes y las salidas fuera de rutina son ciertos placeres que me gussta experimentar varias veces al año, aunque no por eso descuido mi empleo.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  `;
}