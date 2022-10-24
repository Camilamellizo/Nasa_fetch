function ramdomuser() {
  fetch("https://randomuser.me/api/")
    .then(function user(respuesta) {
      return respuesta.json();
    })

    .then(function datos(datos) {
      for (let i = 0; i < datos.results.length; i++) {
        document.getElementById("user").innerHTML += `
        <div class = "grid justify-items-center border-dashed border-2 border-yellow-600 mx-8 my-8 py-4 px-2">
        <img src=${datos.results[i].picture.medium} class = "my-4 rounded">
        <h3>${datos.results[i].name.title}
             ${datos.results[i].name.first}
             ${datos.results[i].name.last}</h3>
        <h3>${datos.results[i].location.city}</h3>
        <h3>${datos.results[i].email}</h3>
        </div>
        `;
      }
    })

    .catch(function error(error) {
      return console.log(error);
    });
}

/*
function mostrarPersonajes(){
    fetch("https://rickandmortyapi.com/api/character")//petición a la API
        .then(function respuestaPeticion(respuesta){
            return respuesta.json()
        })
        .then(function cogerDatos(datos){
            for(let i=0; i<datos.results.length;i++){
                document.getElementById("personajes").innerHTML+=`
                <img src=${datos.results[i].image}>
                <h3>${datos.results[i].name}</h3>
                `
            }
        })

        .catch(function error(error){
            return console.log(error)
        })


}*/
