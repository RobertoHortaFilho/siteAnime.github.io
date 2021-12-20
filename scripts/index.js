import { requestA, requestTop} from './request.js'
import { addAnime } from './add-anime.js'

//esse codigo foi enviado pelo git
//Variaveis de controle
var busca = {
    Lastlink: "",
    pagina: 1,
    tipo: 'results' ,
    req: true,
}

// reset pagina
function resetPagina(){
    busca.pagina = 1
    document.querySelector('.pagina').innerText = "- 1 -"
    busca.req = true;

}

// receber valor form
let botao = document.querySelector('.busca-butao')
botao.addEventListener('click', (e) =>{
    e.preventDefault()

    let valor_busca = document.querySelector('.busca-texto').value
    console.log(valor_busca)
    let res = requestA(valor_busca)
    busca.Lastlink = res.link
    busca.tipo = res.tipo
    resetPagina()
    
})

//carregar a pagina a primeira vez com escolhas predifinidas
let opcoes = ['monogatari','hanako','boku no hero','otakoi','bananafish']
let escolha = Math.ceil((Math.random() * 4))
//console.log(opcoes[escolha])
let res = requestA(opcoes[escolha])
busca.Lastlink = res.link
busca.tipo = res.tipo
resetPagina()



//funçao aos butoes laterias
let buttons = document.querySelectorAll('.botao-genero')
buttons.forEach( (data)=>{
    let link
    let num = 1
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
            break;
        case 'action':
            link = 'https://api.jikan.moe/v3/genre/anime/1'
            break;
        case 'adventure':
            link ='https://api.jikan.moe/v3/genre/anime/2'
            break;
        case 'comedy':
            link ='https://api.jikan.moe/v3/genre/anime/4'
            break;
        case 'drama':
            link ='https://api.jikan.moe/v3/genre/anime/8'
            break;
        case 'fantasy':
            link ='https://api.jikan.moe/v3/genre/anime/10'
            break;
        case 'sifi':
            link ='https://api.jikan.moe/v3/genre/anime/24'
            break;
        case 'sport':
            link ='https://api.jikan.moe/v3/genre/anime/30'
            break;
                
    }
    data.addEventListener('click', (buscar) =>{
        let res = requestTop(link,num)
        busca.Lastlink = res.link
        busca.tipo = res.tipo
        resetPagina()
    })
})
// 1 acao 2 aventura 4 comedy 8 drama 10 fantasia 24 sifi 30 sport 

//passar e voltar paginas
const backP = document.querySelector('.back')
backP.addEventListener('click', ()=>{
    if(busca.req){
        if (busca.pagina > 1){
            busca.req = false
            busca.pagina --;
            requestPagina(busca.Lastlink,busca.pagina,busca.tipo)
            document.querySelector('.pagina').innerText = `- ${busca.pagina} -`
        }
    }
})

const skipP = document.querySelector('.skip')
skipP.addEventListener('click',()=>{
    if (busca.req){
        if (busca.pagina < 500){
            busca.req = false
            busca.pagina ++;
            requestPagina(busca.Lastlink,busca.pagina,busca.tipo)
            document.querySelector('.pagina').innerText = `- ${busca.pagina} -`
        }
    }
})

// previnir mts requests
function requestPagina(Llink,pag,tipo){
    fetch(`${Llink}/${pag}`).then( response => {
        response.json().then(data =>{
            document.querySelector('.animesreq').innerHTML = ""
            switch (tipo){
                case 'anime':
                    var animes = data.anime
                    break;
                case 'top':
                    var animes = data.top
                    break;
                case 'results':
                    var animes = data.results
                    break;
            }
            animes.forEach(element => {
                let texto = ''
                if (element.title.length > 40){
                    texto = `${element.title.substring(0,30)}...`
                }else{
                    texto = element.title
                }
                addAnime(texto,element.image_url)
                
            })
            console.log('animes add pag: '+pag)
            console.log(`${Llink}/${pag}`)
            busca.req = true;
        })
    })
}




// refresh da pagina a cada .5sg
setInterval(()=>{
    let animes_week = document.querySelector('.animesweek')
    if (window.scrollY > 90){
        animes_week.style.height = '95vh'
    }else{
        animes_week.style.height = '74%'
    }
    //console.log(busca)
}, 500)


