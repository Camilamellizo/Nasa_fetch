function ramdompokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(function pokemon(respuesta) {
        return respuesta.json();
      })
  
      .then(function datos(datos) {         
        for (let i = 0; i < datos.length; i++) {
            let limber = document.getElementById("limber")
            let imposter = document.getElementById("imposter")

            if(datos === limber){ 
                //return limber()
                alert(hola)
            }
            if(datos === imposter){ 
                return imposter()
            } 
        
    }
    })
       
      .catch(function error(error) {
        return console.log(error);
      });
}

function limber(){
    for (let i = 0; i < datos.length; i++) {
    document.getElementById("pokemon").innerHTML += `
          <div class = "grid justify-items-center border-solid border-2 border-orange-600 mx-8 my-8 py-4 px-2">
          <img src=${datos.abilities[i].ability.url} class = "my-4 rounded">
          <h3>${datos.abilities[i].ability.name}</h3>
                  
          </div>
          `;
    }
}
  