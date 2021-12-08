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
                <p class="type-single">${data.types.map((type) => type.type.name).join(' </p> <p class="type-single"> ')}</p>
            </div>
    `



    let newDiv = document.createElement("div")
    newDiv.classList.add('pokemon')
    newDiv.innerHTML = pokemonString

    let currentDiv = document.getElementById('root');
    currentDiv.appendChild(newDiv)

    let types = document.getElementsByClassName('type-single')
    types = Array.from(types)
    types.forEach(el =>{
        pokeType = el.innerHTML.replace(/\s/g, '')
        console.log(pokeType)
        if (pokeType === 'normal'){
            el.classList.add('normal')
        }
        if (pokeType === 'fighting'){
            el.classList.add('fighting')
        }
        if (pokeType === 'flying'){
            el.classList.add('flying')
        }
        if (pokeType === 'poison'){
            el.classList.add('poison')
        }
        if (pokeType === 'ground'){
            el.classList.add('ground')
        }
        if (pokeType === 'ice'){
            el.classList.add('ice')
        }
        if (pokeType === 'rock'){
            el.classList.add('rock')
        }
        if (pokeType === 'bug'){
            el.classList.add('bug')
        }
        if (pokeType === 'ghost'){
            el.classList.add('ghost')
        }
        if (pokeType === 'steel'){
            el.classList.add('steel')
        }
        if (pokeType === 'fire'){
            el.classList.add('fire')
        }
        if (pokeType === 'water'){
            el.classList.add('water')
        }
        if (pokeType === 'grass'){
            el.classList.add('grass')
        }
        if (pokeType === 'electric'){
            el.classList.add('electric')
        }
        if (pokeType === 'psychic'){
            el.classList.add('psychic')
        }
        if (pokeType === 'dragon'){
            el.classList.add('dragon')
        }
        if (pokeType === 'dark'){
            el.classList.add('dark')
        }
        if (pokeType === 'fairy'){
            el.classList.add('fairy')
        }
        if (pokeType === 'shadow'){
            el.classList.add('shadow')
        }
    })
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







