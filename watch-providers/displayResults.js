const API_KEY = 'fe107f0049ae296497a71c6ed3b25a83'

// takes a list of movies/tv shows and displays each one in the list
export default async function displayShows(showType = 'tv') {
  document.querySelector('.show') && removeShows()

  const shows = await getShowData(showType)

  shows.map((show) => {
    const image = getShowImage(show)
    const title = showType === 'movie' ? show.original_title : show.name

    const showEl = document.createElement('a')
    showEl.setAttribute('href', `providers.html?id=${show.id}&showType=${showType}&title=${title}&imageUrl=${image}`)
    showEl.setAttribute('class', 'show')
    document.querySelector('#shows').append(showEl)

    const titleEl = document.createElement('h3')
    titleEl.textContent = title
    showEl.append(titleEl)

    const imageEl = document.createElement('img')
    imageEl.setAttribute('src', image)
    showEl.append(imageEl)
  })

  document.querySelector('#search-form').reset()
}

// gets movie/tv data from the api with the user entered movie title
async function getShowData(showType) {
  const userInput = document.querySelector('#user-input').value
  const url = `https://api.themoviedb.org/3/search/${showType}?api_key=${API_KEY}&query=${userInput.replace(' ', '+')}`

  const res = await fetch(url)
  const data = await res.json()
  return data.results
}

// returns image URL of the given movie
function getShowImage(show) {
  const posterImageUrl = 'https://image.tmdb.org/t/p/w200'

  if (show.poster_path == null) {
    return 'noImage.jpg'
  }
  return `${posterImageUrl}${show.poster_path}`
}

// removes search results
function removeShows() {
  const shows = document.querySelectorAll('.show')
  shows.forEach((show) => show.remove())
}
