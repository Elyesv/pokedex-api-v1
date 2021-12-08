//fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//    .then(resp => resp.json())
//    .then(function(data){
//        let pokemon = data;
//        let sprites = pokemon.sprites
//
//        let pokeName = document.querySelector('#pokeName')
//        pokeName.innerHTML = pokemon.name
//
//        let pokeSprite = document.querySelector('#pokeSprite')
//        pokeSprite.src = sprites.back_default
//
//        let pokeID = document.querySelector('#pokeID')
//        pokeID.innerHTML = pokemon.id
//
//    })

//let result = fetch('https://pokeapi.co/api/v2/pokemon')
//    .then(resp => resp.json())
//    .then(function(data){
//            let pokemon = data.results
//            pokemon.forEach((el) => {
//                console.log(el.name)
//                return fetch(el.url)
//            })
//    })
//    .then(response => response.json())
//    .catch(err => {
//            console.error('Request failed', err)
//    })
//
//console.log(result)
//result.then(r => {
//        console.log(r)
//})

let pokeCall = () =>{
    pokeList.forEach((el) =>{
        fetch(el.url)
            .then(resp => resp.json())
            .then(function(data){
                addPokemon(data.name, data.sprites.front_default, data.id)
            })
    })
}

let addPokemon = (name, sprites, id) =>{
    let newDiv = document.createElement("div")
    newDiv.classList.add('pokemon')
    let pokeSprites = document.createElement("img")
    pokeSprites.src = sprites
    let pokeName = document.createTextNode(name);
    newDiv.appendChild(pokeName)
    newDiv.appendChild(pokeSprites)

    let currentDiv = document.getElementById('root');
    currentDiv.appendChild(newDiv)
}

let pokeFetch = (url) => {
    fetch(url)
        .then(resp => resp.json())
        .then(function(data){
            pokeList = data.results
            pokeCall()
        })
}

pokeFetch('https://pokeapi.co/api/v2/pokemon')