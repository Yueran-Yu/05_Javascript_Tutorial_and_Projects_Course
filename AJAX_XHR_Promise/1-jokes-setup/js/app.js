const mainBtn = document.querySelector('#mainBtn')
const result = document.querySelector('#result')
const imgContainer = document.querySelector('#img')


mainBtn.addEventListener('click', function () {
  const ajax = new XMLHttpRequest()
  const url = "https://api.chucknorris.io/jokes/random"
  ajax.open('GET', url, true)

  ajax.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText)
      const { icon_url: img, value: joke } = data

      result.textContent = joke
      imgContainer.src = img
    }
  }
  ajax.onerror = function () {
    console.log('there was an errors');
  }
  ajax.send()
})