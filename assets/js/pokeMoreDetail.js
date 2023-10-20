let pokemonElement = document.getElementById('detalhes');
const urlParams = new URLSearchParams(window.location.search);
pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${urlParams.get('id')}`;

pokeApi.getPokemonDetail({url: pokemonUrl})
    .then((pokemon) => {
        const pokemonHtml = `
        <header class="${pokemon.type}">
        <a href="javascript:history.back()" class="voltar">return to previous page</a>
            <div id="cabecalho">
                <div class="imagem-round">
                    <img src="${pokemon.photo}" alt="">
                </div>
                <span class="nome">${pokemon.name}</span>
            </div>
        </header>
        <main>
            <div class="infos">
                ${pokemon.types.map((type) => 
                    `<div class="type ${pokemon.type}">
                            <span class="legenda">Type</span> 
                            <div class="atributo ${pokemon.type}">${type}</div>
                    </div>`).join('')}
                ${pokemon.abilities.map((ability) =>                     
                    `<div class="type ${pokemon.type}">
                                <span class="legenda">Ability</span>
                                <div class="atributo ${pokemon.type}">${ability}</div>
                        </div>`).join('')}
                    </div>        
            </main>            
            `;

        pokemonElement.innerHTML += pokemonHtml;
    })

    

   