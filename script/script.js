let offset = 0
let url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`
const root = document.getElementById('root')

let paging = (choice) =>{
    if (choice == "prev"){
        if (offset != 0){
            offset -= 50
            url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`
            root.innerHTML = ''
            pokeFetch(url)
        }
    }
    else{
        offset += 50
        url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`
        root.innerHTML = ''
        pokeFetch(url)
    }
    console.log(offset)
}

document.getElementsByClassName('previous')[0].addEventListener('click',  () =>{
    paging('prev')
})

document.getElementsByClassName('next')[0].addEventListener('click',  () =>{
    paging('next')
})

let pokeCall = () =>{
    pokeList.forEach((el) =>{
        fetch(el.url)
            .then(resp => resp.json())
            .then(function(data){
                addPokemon(data)
            })
    })
}

let addPokemon = (data) =>{

    pokemonString = `
            <img class="pokemon-image" src="${data.sprites.front_default}"/>
            <h2 class="pokemon-title">${data.id}. ${data.name}</h2>
            <div class="type">
                <p>${data.types.map((type) => type.type.name).join(' </p> <p> ')}</p>
            </div>
    `


let newDiv = document.createElement("div")
    newDiv.classList.add('pokemon')
    newDiv.innerHTML = pokemonString

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

pokeFetch(url)

