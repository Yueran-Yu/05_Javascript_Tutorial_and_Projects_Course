//select elements
const loading = document.querySelector('.loading')
const searchForm = document.querySelector('#searchForm')
const search = document.querySelector('#search')
const output = document.querySelector('.output')
const feedback = document.querySelector('.feedback')

const base = "https://en.wikipedia.org/w/api.php"
const url = `?action=query&format=json&origin=*&list=search&srsearch=`

searchForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const _value = search.value;

  if (_value === '') {
    showFeedback('please enter a valid search value')
  } else {
    search.value = ''
    ajaxWiki(_value)
  }
})

//show feedback
function showFeedback(text) {
  feedback.classList.add('showItem')
  feedback.innerHTML = `<span>${text}</span>`
  setTimeout(() => feedback.classList.remove('showItem'), 2000)
}

//ajax wiki

function ajaxWiki(search) {
  output.innerHTML = ''
  loading.classList.add("showItem")
  const wikiURL = `${base}${url}${search}`

  fetch(wikiURL)
    .then(data => data.json())
    .then(data => displayData(data))
    .catch(e => console.log(e))
}

function displayData(data) {
  loading.classList.remove('showItem')
  const { search: results } = data.query

  let info = ''

  results.forEach(element => {
    const pageID = "https://en.wikipedia.org/?curid="
    const { title, snippet, pageid: link } = element

    info += `<div class="col-10 mx-auto col-md-6 col-lg-4 my-3">
    <div class="card card-body">
      <h1 class="card-title blueText">${title}</h1>
      <p>${snippet}</p>
      <a href="${pageID}${link}" target="_blank" class="my-2 text-capitalize">read
        more...</a>
    </div>
  </div>`

  })
  output.innerHTML = info
  console.log(results);
}
