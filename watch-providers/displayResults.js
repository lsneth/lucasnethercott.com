const API_KEY = 'fe107f0049ae296497a71c6ed3b25a83'

// takes a list of movies/tv shows and displays each one in the list
export default async function displayShows(showType = 'tv') {
  document.querySelector('.show') && removeShows()

  const shows = await getShowData(showType)
  shows.map((show) => {
    if (show.poster_path) { // if it isn't mainstream enough to have a cover, I'm not going to mess with styling it
      document.querySelector('body').insertAdjacentHTML('beforeend', showTemplate(show, showType) ?? '')
    }
  })

  document.querySelector('#search-form').reset()
}

function showTemplate(show, showType) {
  const image = `https://image.tmdb.org/t/p/w300${show.poster_path}`

  return `
      <a href='show.html?id=${show.id}&showType=${showType}&title=${show.name ?? show.original_title}&imageUrl=${image}' class='show'>
        <img src='${image}'/>
      </a>
    `
}

// gets movie/tv data from the api with the user entered movie title
async function getShowData(showType) {
  const userInput = document.querySelector('#user-input').value
  const url = `https://api.themoviedb.org/3/search/${showType}?api_key=${API_KEY}&query=${userInput.replace(' ', '+')}`

  const res = await fetch(url)
  const data = await res.json()
  return data.results
}

// removes search results
function removeShows() {
  const shows = document.querySelectorAll('.show')
  shows.forEach((show) => show.remove())
}