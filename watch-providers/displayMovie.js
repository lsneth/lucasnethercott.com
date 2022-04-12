const API_KEY='fe107f0049ae296497a71c6ed3b25a83';
const LOGO_IMAGE_URL='https://image.tmdb.org/t/p/original';

const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

function fetchWatchProviders(){
    document.querySelector('#pageTitle').textContent=PARAMS.title;
    let movieId=PARAMS.movieId;
    let url='https://api.themoviedb.org/3/movie/'+movieId+'/watch/providers?api_key='+API_KEY;

    fetch(url)
    .then(response=>response.json())
    .then(movieData=>displayMovie(movieData));
}

function displayMovie(movieData){
    let title=document.createElement('h1');
    title.textContent=PARAMS.title;
    document.querySelector('#movieHeader').append(title);

    let image=document.createElement('img');
    image.setAttribute('src', PARAMS.imageUrl);
    document.querySelector('#movieHeader').append(image);

    displayProviders(movieData, 'flatrate');
    displayProviders(movieData, 'rent');
    displayProviders(movieData, 'buy');
}

function displayProviders(movieData, watchType){
    let providers=movieData['results']['US'][watchType];
    for (let provider of providers){
        let image=document.createElement('img');
        image.setAttribute('src', LOGO_IMAGE_URL+provider['logo_path']);
        image.setAttribute('style', 'padding:10px 10px 50px;');
        image.setAttribute('class', 'providerLogo');
        document.querySelector('#'+watchType).append(image);
    }
}