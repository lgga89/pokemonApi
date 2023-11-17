const listaPokemon = document.querySelector("#list__pokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((res) => res.json())
    .then((data) => mostrarPokemon(data));
}

//contenedor
let mostrarPokemon = (poke) => {
  //boteones

  let tipos = poke.types.map(
    (type) => `<div class="${type.type.name}type__poke">${type.type.name}</div>`
  );
  tipos = tipos.join("");

  const section = document.createElement("section");
  section.classList.add("container__poke");
  section.innerHTML = `
  
      <div class="figure__poke">
        <img class="img__poke" src="${poke.sprites.other.dream_world.front_default}" alt="">
      </div>
      <article class="container__description">
        <p class="id__poke"><span>N°${poke.id}</span></p>
        <h2 class="name__poke">${poke.name}</h2>
      </article>
      <article class="btn__poke">
        ${tipos}
      </article>


    `;
  listaPokemon.append(section);
};
