
const cardConteiner = document.querySelector('js-card-conteiner')


fetch('https://pokeapi.co/api/v2/pokemon/154')
.then(response=>response.json())
.then(pokemon=>{
    const marcup = pokemonCardTpl(pokemon);
    cardConteiner.innerHTML = marcup;

})