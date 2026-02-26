const botao = document.getElementById ("btnBuscar");
const nome = document.getElementById ("nomepokemon");
const imagem =document.getElementById("imagempokemon");

botao.addEventListener("click", function(){
    const numero = document.getElementById ("numeroDoPokemon").value;    
    fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then (function(resposta){
        return resposta.json ();
    })
    .then (function(dados){
        nome.textContent = dados 
        imagem.src = dados.sprites.front_default;
    })
})