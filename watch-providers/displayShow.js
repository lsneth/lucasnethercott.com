import { getWatchProviders, getBackdropImage } from './services.js'

const API_KEY = 'fe107f0049ae296497a71c6ed3b25a83'
const LOGO_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

const PARAMS = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
})

async function showTemplate() {
  return `
  <div id='showHeader'>
    <div id='backdropImageGradient'>
      <img id='backdropImage' src='${await getBackdropImage(PARAMS.showType, PARAMS.showId)}'/>
    </div>
    <img id='posterImage' src='${PARAMS.imageUrl}'/>
    <h1 id='title'>${PARAMS.title}</h1>
  </div>

  <h2>Stream</h2>
  <div id="flatrate"></div>
  <h2>Rent</h2>
  <div id="rent"></div>
  <h2>Buy</h2>
  <div id="buy"></div>

  <button onclick='location.href="index.html";' class="button">search again</button>
  `
}

async function displayShow() {
  document.querySelector('title').textContent = `${PARAMS.title} | Stream Scout`

  document.querySelector('body').insertAdjacentHTML('afterbegin', await showTemplate())

  displayProviders()
}

async function displayProviders() {
  const show = await getWatchProviders(PARAMS.showType, PARAMS.showId)
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

displayShow()
