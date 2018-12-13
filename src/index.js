document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)

  const container = document.querySelector("#pokemon-container")
  const searchBar = document.querySelector("#pokemon-search-input")

  const addPokemon = function(array){
    // This is a general funtion that will take in an array, iterate the array and add each element.name, element front image and back image to html div
    array.forEach(function(pokemon){
      container.innerHTML += `<div class='pokemon'>${pokemon.name}
                                <img src = '${pokemon.sprites.front}' class='show'>
                                <img src = '${pokemon.sprites.back}' class= 'hide'>
                              </div>`
    }
  )}
//we have to call addPokemon on POKEMON array before we filter so that all the POKEMON will show
  addPokemon(POKEMON)

  searchBar.addEventListener("input", function(event){
    container.innerHTML = ''
    // Here we're paying attention to the input the user puts into the search bar
    const searchTerm = event.target.value
    // Whatever the value of the input is in the searchbar, we're setting as the variable "searchTerm"

    const filteredPokemons = POKEMON.filter(function(pokemon){ //Filtering through the POKEMON array
      return pokemon.name.includes(searchTerm) // returns the name of the pokemon within the POKEMON array that matches the user input
    })
      addPokemon(filteredPokemons) //calls the method that will print the array in the HTML format (reference method above)

  })







})
