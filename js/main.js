const containerPoke = document.querySelector("#list__pokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((res) => res.json())
    .then((data) => mostrarPokemon(data));
}

function mostrarPokemon(poke) {
  const section = document.querySelector("section");
  section.classList.add("container__poke");
  section.innerHTML = `
  <div class="figure__poke">
        <img class="img__poke" src="./img/01.png" alt="">
      </div>

      <article class="container__description">
        <p class="id__poke"><span>N°${poke.id}</span></p>
        <h2 class="name__poke">${poke.name}</h2>
      </article>


      <article class="btn__poke">
        <div class="type__poke--plant">Planta</div>
        <div class="espe__poke--plant">Veneno</div>
      </article>
  
  
  `;
}
/*<section class="container__poke" id="list__pokemon">
      <div class="figure__poke">
        <img class="img__poke" src="./img/01.png" alt="">
      </div>

      <article class="container__description">
        <p class="id__poke"><span>N.º 0001</span></p>
        <h2 class="name__poke">Bulbasaur</h2>
      </article>


      <article class="btn__poke">
        <div class="type__poke--plant">Planta</div>
        <div class="espe__poke--plant">Veneno</div>
      </article>
    </section> */
