const API_KEY='fe107f0049ae296497a71c6ed3b25a83'

// takes a list of movies and displays each movie in the list
export default async function displayResults(){
    const movies = await getMovieData()

    document.querySelector('.result') && removeResults()

    movies.map(movie => {
        const image = getMovieImage(movie)

        const result=document.createElement('a')
        result.setAttribute('href', `movie.html?movieId=${movie.id}&title=${movie.original_title}&imageUrl=${image}`)
        result.setAttribute('class', 'result')
        document.querySelector('#results').append(result)
        
        const titleEl=document.createElement('h3')
        titleEl.textContent=movie.original_title
        result.append(titleEl)
        
        const imageEl=document.createElement('img')
        imageEl.setAttribute('src', image)
        result.append(imageEl)
    })
}

// gets movie data from the api with the user entered movie title
async function getMovieData(){
    const userInput=document.querySelector("#user-input").value
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${userInput.replace(' ', '+')}`
    
    const res = await fetch(url)
    const data = await res.json()
    return data.results
}

// returns image URL of the given movie
function getMovieImage(movie){
    const posterImageUrl='https://image.tmdb.org/t/p/w200'

    if(movie.poster_path==null){
        return 'noImage.jpg'
    }
    return posterImageUrl+movie.poster_path
}

// resets search results
function removeResults(){
    const results=document.querySelectorAll('.result')
    results.forEach(result => result.remove())
}