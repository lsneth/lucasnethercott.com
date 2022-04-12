const API_KEY='fe107f0049ae296497a71c6ed3b25a83';

// calls the api with the user entered movie title
function fetchData(){
    let userQuery=document.querySelector("#titleQuery").value;
    let url='https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+(userQuery.replace(' ', '+'));

    fetch(url)
    .then(response => response.json())
    .then(data => getMovies(data));
}

// takes response and puts each result into a list
function getMovies(data){
    let movies=[];
    for(let movie of data['results']){
        movies.push(movie);
    }
    displayResults(movies);
}

// takes a list of movies and displays each movie in the list
function displayResults(movies){
    removeResults();
    for(let movie of movies){
        let result=document.createElement('a');
        result.setAttribute('href', 'movie.html?movieId='+getMovieId(movie)+'&title='+getMovieTitle(movie)+'&imageUrl='+getMovieImage(movie));
        result.setAttribute('id', getMovieId(movie));
        result.setAttribute('class', 'result');
        document.querySelector('#results').append(result);

        let title=document.createElement('h3');
        title.textContent=getMovieTitle(movie);
        result.append(title);

        let image=document.createElement('img');
        image.setAttribute('src', getMovieImage(movie));
        result.append(image);
    }
}

// returns image URL of the given movie
function getMovieImage(movie){
    let posterImageUrl='https://image.tmdb.org/t/p/w200';

    if(movie['poster_path']==null){
        return 'noImage.jpg';
    }

    return posterImageUrl+movie['poster_path'];
}

// returns title of the given movie
function getMovieTitle(movie){
    return movie['original_title'];
}

function getMovieId(movie){
    return movie['id'];
}

// resets search results
function removeResults(){
    let results=document.querySelectorAll('.result');
    for(let result of results){
        result.remove();
    }
}