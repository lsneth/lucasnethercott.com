import displayResults from "./displayResults.js"

const searchForm = document.getElementById('search-form')
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    displayResults()
})