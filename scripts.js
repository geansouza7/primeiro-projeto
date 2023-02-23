
let chave = "dcb0de86a34a6b55f5c0aad5e047b2ee"

function colocarNaTela(dados){
console.log(dados)

   document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
   document.querySelector(".descricao").innerHTML = dados.weather[0].description
   document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}

async function buscarCidade(cidade){
   let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
   cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
   .then(resposta => resposta.json())


colocarNaTela(dados)
  
      

}


function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value 

   buscarCidade(cidade)


}