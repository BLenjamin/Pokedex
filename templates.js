function pokemonCard(index) {
    return `<div id="pokemonCard" class="${fillTypes1(index)}">
    <div id="upperSection">
        <span id="pokeID">#${pokemonDetails[index].id}</span>
        <h2>${capitalizeFirstLetter(pokemonDetails[index].name)}</h2>
        <div></div>
    </div>
        <img id="pokePic" src="${pokemonDetails[index].sprites.other.showdown.front_default}" alt="Pokepic">
        <div id="lowerSection">
            <span id="pokeText">${flavorTexts[index].flavor_text}</span>
            <div id="elements">
                <div class="element" id="element1">${fillTypes1(index)}</div>
                <div class="element" id="element2">${fillTypes2(index)}</div>
            </div>
        </div>
</div>`
}

function capitalizeFirstLetter(string) {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}
