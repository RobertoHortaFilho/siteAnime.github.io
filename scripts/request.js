import { addAnime } from './add-anime.js'
const link = 'https://api.jikan.moe/v3/search/anime?q='


export function requestA(name){
    document.querySelector('.animesreq').innerHTML = ""
    fetch(link+name).then( response => {
        response.json().then( data =>{
            //console.log(data)
           // console.log(data);
            data.results.forEach(element => {
                //criando os htmls
                //console.log(element)
                let texto = ''
                if (element.title.length > 40){
                    texto = `${element.title.substring(0,30)}...`
                }else{
                    texto = element.title
                }
                addAnime(texto,element.image_url,element.mal_id)
                

            });
            

        }).catch( error => console.log(error))
    }).catch( err => console.log( err ))

    return {
        link:link+name,
        tipo:'results'
    }
}

export function requestTop(link2,num){
    let voltar = {
        link: link2,
        tipo: (num == 0) ? 'top' : 'anime'
    }
    fetch(link2).then( response => {
        response.json().then( data => {
            console.log(data)
            document.querySelector('.animesreq').innerHTML = ""
                //console.log(data)
                let animes
                
                switch(num){
                    case 0:
                        animes = data.top //mal_id
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
                    addAnime(texto,element.image_url,element.mal_id)
                })
                
        }).catch( error => console.log(error))}
    ).catch( error => console.log(error))
        return voltar
}
