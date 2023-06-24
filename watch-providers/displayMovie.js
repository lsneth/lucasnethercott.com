const API_KEY='fe107f0049ae296497a71c6ed3b25a83'
const LOGO_IMAGE_URL='https://image.tmdb.org/t/p/original'

const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})

function displayMovie(){
    document.querySelector('title').textContent=`${PARAMS.title} | Stream Scout`

    const titleEl=document.createElement('h1')
    titleEl.textContent=PARAMS.title
    document.querySelector('#movieHeader').append(titleEl)
    
    const imageEl=document.createElement('img')
    imageEl.setAttribute('src', PARAMS.imageUrl)
    document.querySelector('#movieHeader').append(imageEl)

    displayProviders()
}

async function displayProviders(){
    const movie = await getWatchProviders()
    const watchTypes = ['flatrate', 'rent', 'buy']

    watchTypes.map(watchType =>{
        const providers = movie[watchType]
        providers.map(provider => {
            const imageEl = document.createElement('img')
            imageEl.setAttribute('src', LOGO_IMAGE_URL+provider['logo_path'])
            imageEl.setAttribute('style', 'padding:10px 10px 50px')
            imageEl.setAttribute('class', 'providerLogo')
            document.querySelector('#'+watchType).append(imageEl)
        })
    }) 
}

async function getWatchProviders(){
    const url=`https://api.themoviedb.org/3/movie/${PARAMS.movieId}/watch/providers?api_key=${API_KEY}`

    const res = await fetch(url)
    const data = await res.json()
    return data.results.US
}

displayMovie()