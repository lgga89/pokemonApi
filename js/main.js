//LLAMAOS PARA QUE SE EJECUTE

const llamandoApi = () => {
  console.log("Hello World");
};

llamandoApi();

//llamar a la API
const llamandoAPI = async () => {
  const respuesta = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  console.log(respuesta);
};

llamandoAPI();

//vliara algun tipo de error

const llamandoAPI = async () => {
  try {
    const respuesta = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

llamandoAPI();

//ACCEDER A LOS DATOS  A LA INFORMACION
const llamandoAPI = async () => {
  try {
    const respuesta = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );

    const data = respuesta.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

llamandoAPI();
//https://chat.openai.com/c/6108b1b7-e718-4e97-a37a-32c21d833ff1
