function fotodeldia() {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let anyo = document.getElementById("año").value;

  fetch(`https://api.nasa.gov/planetary/apod?api_key=gwFrch9JPjMyH71YDDEvodHxs290e1NoaDy2LtMb&date=${anyo}-${mes}-${dia}`
  ) //petición a la API
    .then(function Peticion(respuesta) {
      return respuesta.json();
    })

    .then(function datos(datos) {
      document.getElementById("fotos").innerHTML += `
                <div class="grid justify-items-center mb-8">
                <img src = ${datos.url} class="w-96 h-96 mb-4">
                <p class=" mb-4"> ${datos.date}</p>
                <p  class=" mb-4 text-4xl text-center"> ${datos.title}</p>               
                <p> ${datos.explanation}</p>     
                </div>
                `
    })
    .catch(function error(error) {
      return console.log(error);
    });
}

/*
function mostrarPersonajes(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=gwFrch9JPjMyH71YDDEvodHxs290e1NoaDy2LtMb")//petición a la API
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


}
*/
