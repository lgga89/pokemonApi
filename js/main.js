const containerPoke = document.querySelector("#list__pokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((res) => res.json())
    .then((data) => mostrarPokemon(data));
}

let tipos = poke.types.map((type) => type.type.name);

function mostrarPokemon(poke) {
  const section = document.querySelector("section");
  section.classList.add("container__pokemon");
  section.innerHTML = `
  <section class="container__poke" id="list__pokemon">
      <div class="figure__poke">
        <img class="img__poke" src="${poke.sprites.other.dream_world.front_default}" alt="">
      </div>

      <article class="container__description">
        <p class="id__poke"><span>N°${poke.id}</span></p>
        <h2 class="name__poke">${poke.name}</h2>
      </article>


      <article class="btn__poke">
        <div class="type__poke--plant">${poke.past_abilities}</div>
        <div class="espe__poke--plant">${poke.past_types}</div>
      </article>
  </section>

    `;
}
