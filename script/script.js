fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(resp => resp.json())
    .then(function(data){
        let pokemon = data;
        let sprites = pokemon.sprites

        let pokeName = document.querySelector('#pokeName')
        pokeName.innerHTML = pokemon.name

        let pokeSprite = document.querySelector('#pokeSprite')
        pokeSprite.src = sprites.back_default

        let pokeID = document.querySelector('#pokeID')
        pokeID.innerHTML = pokemon.id

    })

