import { requestA, requestTop} from './request.js'

// receber valor form
let botao = document.querySelector('.busca-butao')
botao.addEventListener('click', (e) =>{
    e.preventDefault()

    let valor_busca = document.querySelector('.busca-texto').value
    console.log(valor_busca)
    requestA(valor_busca)
})

//carregar a pagina a primeira vez com escolhas predifinidas
let opcoes = ['monogatari','hanako','boku no hero','otakoi','bananafish']
let escolha = Math.ceil((Math.random() * 4))
console.log(opcoes[escolha])
requestA(opcoes[escolha])



//funçao aos butoes laterias
let buttons = document.querySelectorAll('.botao-genero')
buttons.forEach( (data)=>{
    let link
    let num = 2
    switch(data.id){
        case 'topa':
            link = 'https://api.jikan.moe/v3/top/anime'
            num = 0
            break;
        case 'topm':
            link = 'https://api.jikan.moe/v3/top/manga'
            num = 0
            break;
        case 'season':
            link = 'https://api.jikan.moe/v3/season/2021/winter'
            num = 1
            break;
        case 'action':
            link = 'https://api.jikan.moe/v3/genre/anime/1'
            break;
    }
    data.addEventListener('click', (buscar) =>{
        requestTop(link,num)
    })
})
// 1 acao 2 aventura 4 comedy 8 drama 10 fantasia 24 sifi 30 sport 




// refresh da pagina a cada .5sg
setInterval(()=>{
    let animes_week = document.querySelector('.animesweek')
    if (window.scrollY > 90){
        animes_week.style.height = '95vh'
    }else{
        animes_week.style.height = '74%'
    }
}, 500)


