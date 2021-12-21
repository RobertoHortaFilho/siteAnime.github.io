
export function addAnime(namee, imgg){
    let caixa_anime = document.querySelector('.animesreq')

    let quadro_anime = document.createElement('a')
    quadro_anime.classList.add('anime-box')
    quadro_anime.href = "./paginaanime.html"
    quadro_anime.style.textDecoration = 'none'

    let nome_anime = document.createElement('h1')
    nome_anime.innerText = namee
    nome_anime.classList.add('anime-title')

    let quadro_img = document.createElement('div')
    quadro_img.classList.add('anime-image-box')

    let img = document.createElement('img')
    img.classList.add('anime-image')
    img.src = imgg

    caixa_anime.appendChild(quadro_anime)
    //quadro_anime.appendChild(link)
    quadro_anime.appendChild(nome_anime)
    quadro_anime.appendChild(quadro_img)
    quadro_img.appendChild(img)

}




