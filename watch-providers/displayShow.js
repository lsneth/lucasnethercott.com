const API_KEY = 'fe107f0049ae296497a71c6ed3b25a83'
const LOGO_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
})

async function displayShow() {
  document.querySelector('title').textContent = `${PARAMS.title} | Stream Scout`

  const titleEl = document.createElement('h1')
  titleEl.textContent = PARAMS.title
  document.querySelector('#movieHeader').append(titleEl)

  const backdropUrl = await getShowBackdropImage()
  if (backdropUrl) {
    const backdropImageEl = document.createElement('img')
    backdropImageEl.setAttribute('src', backdropUrl)
    document.querySelector('#movieHeader').appendChild(backdropImageEl)
  }

  const imageEl = document.createElement('img')
  imageEl.setAttribute('src', PARAMS.imageUrl)
  document.querySelector('#movieHeader').append(imageEl)

  displayProviders()
}

async function displayProviders() {
  const show = await getWatchProviders()
  const watchTypes = ['flatrate', 'rent', 'buy']

  watchTypes.map((watchType) => {
    const providers = show[watchType]
    if (providers) {
      providers.map((provider) => {
        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', `${LOGO_IMAGE_URL}${provider.logo_path}`)
        imageEl.setAttribute('style', 'padding:10px 10px 50px')
        imageEl.setAttribute('class', 'providerLogo')
        document.querySelector('#' + watchType).append(imageEl)
      })
    } else {
      const noneEl = document.createElement('p')
      noneEl.textContent = 'none'
      document.querySelector('#' + watchType).append(noneEl)
    }
  })
}

async function getWatchProviders() {
  const url = `https://api.themoviedb.org/3/${PARAMS.showType}/${PARAMS.id}/watch/providers?api_key=${API_KEY}`

  const res = await fetch(url)
  const data = await res.json()
  return data.results.US
}

async function getShowBackdropImage() {
  const seasons = PARAMS.showType === 'tv' ? 'season/2/' : ''

  const url = `https://api.themoviedb.org/3/${PARAMS.showType}/${PARAMS.id}/${seasons}images?api_key=${API_KEY}`

  const imageUrl = 'https://image.tmdb.org/t/p/w1280'

  const res = await fetch(url)
  const data = await res.json()

  if (data.backdrops) {
    // this is just the first backdrop, but there are a ton for every show. It would be fun to cycle through them or display a random one
    return `${imageUrl}${data.backdrops[0].file_path}`
  }
  return undefined
}

displayShow()
