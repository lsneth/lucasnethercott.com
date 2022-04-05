require('dotenv').config();

const API_KEY=process.env.TMDB_API_KEY;
const MOVIE_DATA_URL='https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=';
const WATCH_PROVIDER_URL='https://api.themoviedb.org/3/movie/{movie_id}/watch/providers?api_key=<<api_key>>';
const POSTER_IMAGE_URL='https://image.tmdb.org/t/p/w200'
const LOGO_IMAGE_URL='https://image.tmdb.org/t/p/original'

// function that displays the movie title and platforms where it is currently streaming
function displayData(watchProviderData, movieData){
    document.querySelector('#streamTitle').innerHTML='Stream';
    document.querySelector('#rentTitle').innerHTML='Rent';
    document.querySelector('#buyTitle').innerHTML='Buy';

    document.querySelector('#instructions').innerHTML='';
    document.querySelector('#instructions').setAttribute('style', 'padding:0;');
    document.querySelector('#movieTitle').innerHTML=getMovieTitle(movieData);
    document.querySelector('#movieImage').setAttribute("src", POSTER_IMAGE_URL + getMovieImage(movieData));

    displayProviders(watchProviderData, 'flatrate');
    displayProviders(watchProviderData, 'rent');
    displayProviders(watchProviderData, 'buy');
}

// function that calls the user-entered movie title and calls the api with that movie title in it
function fetchMovieData(){
    let userQuery=document.querySelector("#titleQuery").value;

    fetch(formatUrlForMovieData(MOVIE_DATA_URL, API_KEY, userQuery))
    .then(response => response.json())
    .then(movieData => fetchWatchProviders(movieData));
}

// function that concatenates the api key, the URL, and the user query
function formatUrlForMovieData(url, apiKey, userQuery){
    let newUrl=url.replace("{api_key}", apiKey);
    let newUserQuery=userQuery.replace(' ', '+')
    return newUrl+newUserQuery;
}


// function that returns watch provider data
function fetchWatchProviders(movieData){
    movieId=getMovieId(movieData);
    fetch(formatUrlForWatchProviders(WATCH_PROVIDER_URL, API_KEY, movieId))
    .then(response => response.json())
    .then(watchProviderData => displayData(watchProviderData, movieData));
}

function formatUrlForWatchProviders(url, apiKey, movieId){
    url=url.replace("<<api_key>>", apiKey);
    url=url.replace("{movie_id}", movieId);
    return url;
}


// function that gets the movie id from the data
function getMovieId(movieData){
    return movieData['results'][0]['id']
}

function getMovieImage(movieData){
    return movieData['results'][0]['poster_path']
}

function getMovieTitle(movieData){
    return movieData['results'][0]['original_title']
}

function displayProviders(watchProviderData, streamType){
    let providers=watchProviderData['results']['US'][streamType];
    document.querySelector('#'+streamType).innerHTML='';
    for (provider of providers){
        let image=document.createElement('img')
        image.setAttribute('src', LOGO_IMAGE_URL+provider['logo_path']);
        image.setAttribute('style', 'padding:10px 10px 50px;');
        image.setAttribute('class', 'providerLogo');
        document.querySelector('#'+streamType).append(image);
        // document.querySelector('#stream').append(provider['provider_name']);
    }
}