var urlAtual = window.location.href
var urlClass = new URL(urlAtual)
var idAnime = urlClass.searchParams.get("idanime")
if (idAnime != null){
    fetch(`https://api.jikan.moe/v3/anime/${idAnime}/characters_staff`).then(response =>{
        response.json().then(data =>{
            console.log(data)
        })
    }).catch(e=>console.log(e))
    
    let corpo = document.querySelector(".corpo")
    
    let cabecalho = document.createElement('div')
    cabecalho.classList.add('cabecalho')
    
    
    
    // characters e dubladores
    // qntd de episodios
    // openings
    // ending pontuacao
    // trailler 
    // recomendacoes
    
    
    
    //corpo.appendChild(cabecalho)


}
