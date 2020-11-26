//select elements
const loading = document.querySelector('.loading')
const searchForm = document.querySelector('#searchForm')
const search = document.querySelector('#search')
const output = document.querySelector('.output')
const feedback = document.querySelector('.feedback')

const base = "https://www.example.org/w/api.php"
const url = `?action=query&format=json&list=search&srsearch=`

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

}
