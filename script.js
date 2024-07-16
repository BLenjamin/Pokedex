let allPokemon = [];

let currentPokemon = [];

function init() {
    currentPokemon = allPokemon;
}

function renderPokemon() {
    for (let i = 0; i < currentPokemon.length; i++) {
        document.getElementById('list').innerHTML += `${currentPokemon[i]}`
    }
}

function filterPokemon(query) {
    currentPokemon = allPokemon.filter(name => name.includes(query))
    renderPokemon();
}