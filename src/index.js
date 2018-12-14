document.addEventListener('DOMContentLoaded', () => {
  fetch("http://localhost:3000/pokemon")
  .then((response)=>response.json())
  .then((data)=>{
    const container = document.querySelector("#pokemon-container")
    const searchBar = document.querySelector("#pokemon-search-input")
    function addPokemon (results){
      let htmlString=''
      // This is a general funtion that will take in an array, iterate the array and add each element.name, element front image and back image to html div
      results.forEach(function(pokemon){

        htmlString +=
        `<div class="pokemon-container">
            <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
              <h1 class="center-text">${pokemon.name}</h1>
              <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img data-id"${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
                <img data-id"${pokemon.id}" data-action="flip" class="hide toggle-sprite" src="${pokemon.sprites.back}">
                </div>
              </div>
          </div>
      </div>`;
      });
    container.innerHTML+=htmlString;

  }
    //we have to call addPokemon on POKEMON array before we filter so that all the POKEMON will show
    addPokemon(data);

    searchBar.addEventListener("input", function(event){

      container.innerHTML = ''
      // Here we're paying attention to the input the user puts into the search bar
      const searchTerm = event.target.value
      // Whatever the value of the input is in the searchbar, we're setting as the variable "searchTerm"

      const filteredPokemons = data.filter(function(pokemon){ //Filtering through the POKEMON array
        return pokemon.name.includes(searchTerm); // returns the name of the pokemon within the POKEMON array that matches the user input
      })
        console.log(filteredPokemons);
        addPokemon(filteredPokemons); //calls the method that will print the array in the HTML format (reference method above)
    })
  })
  container.addEventListener('click',(e)=> {
    if (e.target.tagName ==="IMG"){
      let images=Array.from(event.target.parentElement.children);
      images.forEach(
        function(image){image.classList.toggle('hide');}
      )
    }
  })
})
