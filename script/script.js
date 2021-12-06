fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(resp => resp.json())
    .then(function(data){
        let pokemon = data;
        let sprites = pokemon.sprites

        let pokeName = document.querySelector('#pokeName')
        pokeName.innerHTML = pokemon.name

        let pokeSprite = document.querySelector('#pokeSprite')
        pokeSprite.src = pokemon.name

        let pokeID = document.querySelector('#pokeID')
        pokeID.innerHTML = pokemon.id



        console.log(sprites.back_defaultx)
        console.log(pokemon.name)
        console.log(pokemon.id)
    })

