var urlAtual = window.location.href
var urlClass = new URL(urlAtual)
var idAnime = urlClass.searchParams.get("idanime")
if (idAnime != null){
    var corpo = document.querySelector(".corpo")
    console.log(corpo)
    corpo.innerHTML = "o numero do anime é "+idAnime
    corpo.style.color = "white"

}