let offset = 0
let url = `https://pokeapi.co/api/v2/pokemon?limit=27&offset=${offset}`
const root = document.getElementById('root')


let paging = (choice) =>{
    if (choice === "prev"){
        if (offset !== 0){
            offset -= 27
            url = `https://pokeapi.co/api/v2/pokemon?limit=27&offset=${offset}`
            root.innerHTML = ''
            pokeFetch(url)
        }
    }
    else{
        offset += 27
        url = `https://pokeapi.co/api/v2/pokemon?limit=27&offset=${offset}`
        root.innerHTML = ''
        pokeFetch(url)
    }
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

let addPokemon = (data) => {

    let pokeDiv = document.createElement('div')
    pokeDiv.classList.add('pokemon')

    pokemonSingle = `
            <img class="pokemon-image" src="${data.sprites.front_default}"/>
            <h2 class="pokemon-title">${data.name}</h2>
            <div class="pokemon-hp">${data.stats[0].base_stat} / ${data.stats[0].base_stat}</div>
            <div class="pokemon-barhp"></div>
            <div class="pokemon-info">
                <div class="pokemon-info-weight">
                   <p>Poids</p>
                   <p>${data.weight}</p>
                </div>
                <div class="pokemon-info-type">
                    <p>Type</p>
                    <div>
                        <p class="type-single">${data.types.map((type) => type.type.name).join(' </p> <p class="type-single"> ')}</p>
                    </div>
                </div>
                <div class="pokemon-info-height">
                   <p>height</p>
                   <p>${data.height}</p>
                </div>
            </div>
            
    `

    pokeDiv.innerHTML = pokemonSingle

    document.getElementById("root").appendChild(pokeDiv)

    let types = document.getElementsByClassName('type-single')
    types = Array.from(types)
    types.forEach(el =>{
        pokeType = el.innerHTML.replace(/\s/g, '')
        el.classList.add(pokeType)

    })

    pokeDiv.addEventListener('click', () =>{
        document.body.innerHTML = ""
        url = `https://pokeapi.co/api/v2/pokemon/${data.name}`
        singlePoke(url)
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


let singlePoke = (url) =>{
    fetch(url)
        .then(resp => resp.json())
        .then(function(data){
            pokemonSingle = `
                        <div class="pokemon-image">
                            <img class="pokemon-image-single" src="${data.sprites.front_default}"/>
                            <img class="pokemon-image-single" src="${data.sprites.front_shiny}"/>
                        </div>
                        <h2 class="pokemon-title">${data.name}</h2>
                        <div class="pokemon-hp">${data.stats[0].base_stat} / ${data.stats[0].base_stat}</div>
                        <div class="pokemon-barhp"></div>
                        <div class="pokemon-info">
                            <div class="pokemon-info-weight">
                               <p>Poids</p>
                               <p>${data.weight}</p>
                            </div>
                            <div class="pokemon-info-type">
                                <p>Type</p>
                                <div>
                                    <p class="type-single">${data.types.map((type) => type.type.name).join(' </p> <p class="type-single"> ')}</p>
                                </div>
                            </div>
                            <div class="pokemon-info-height">
                               <p>height</p>
                               <p>${data.height}</p>
                            </div>
                        </div>
                `

            let newDiv = document.createElement("div")
            document.body.style.display = "flex"
            newDiv.classList.add('pokemon', 'position')
            newDiv.innerHTML = pokemonSingle

            document.body.appendChild(newDiv)

            let types = document.getElementsByClassName('type-single')
            types = Array.from(types)
            types.forEach(el =>{
                pokeType = el.innerHTML.replace(/\s/g, '')
                el.classList.add(pokeType)

            })
        })
}



