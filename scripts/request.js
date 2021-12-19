import { addAnime } from './add-anime.js'
const link = 'https://api.jikan.moe/v3/search/anime?q='

// 1 acao 2 aventura 4 comedy 8 drama 10 fantasia 24 sifi 30 sport 
export function requestA(name){
    document.querySelector('.animesreq').innerHTML = ""
    fetch(link+name).then( response => {
        response.json().then( data =>{
            //console.log(data);
            data.results.forEach(element => {
                //criando os htmls
                //console.log(element)
                let texto = ''
                if (element.title.length > 40){
                    texto = `${element.title.substring(0,30)}...`
                }else{
                    texto = element.title
                }
                addAnime(texto,element.image_url)

            });
            

        }).catch( error => console.log(error))
    }).catch( err => console.log( err ))

}

export function requestTop(link2,num){
    fetch(link2).then( response => {
        response.json().then( data => {
            document.querySelector('.animesreq').innerHTML = ""
                console.log(data)
                let animes
                switch(num){
                    case 0:
                        animes = data.top
                        break
                    case 1:
                        animes = data.anime
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
                
        }).catch( error => console.log(error))}
    ).catch( error => console.log(error))

}
