class AjaxWeather {
  constructor() {
    this.apiKey = `d4bba8c14d1527733f651091e2088f72`
  }

  async getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    const weatherData = await fetch(url)
    const weather = await weatherData.json()
    return weather
  }
}

class Display {
  constructor() {
    this.results = document.querySelector('.results')
    this.cityName = document.querySelector('#cityName')
    this.cityCountry = document.querySelector('#cityCountry')
    this.cityIcon = document.querySelector('#cityIcon')
    this.cityTemp = document.querySelector('#cityTemp')
    this.cityHumidity = document.querySelector('#cityHumidity')
  }

  showWeather(data) {
    const { name, sys: { country }, main: { temp, humidity } } = data
    const { icon } = data.weather[0]
    this.results.classList.add('showItem')
    this.cityName.textContent = name
    this.cityCountry.textContent = country
    this.cityIcon.src = `http://api.openweathermap.org/img/w/${icon}.png`
    this.cityTemp.textContent = temp
    this.cityHumidity.textContent = humidity
    console.log(data);
  }
}

(function () {
  const form = document.querySelector('#weatherForm')
  const cityInput = document.querySelector('.cityInput')
  const feedback = document.querySelector('.feedback')
  const submitBtn = document.querySelector('#submitBtn')

  // class
  const ajax = new AjaxWeather()
  const display = new Display()
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const cityValue = cityInput.value
    if (cityValue.length === 0) {
      showFeedback(`City value can not be empty`)
    } else {
      ajax.getWeather(cityValue).then(data => {
        console.log(data);
        if (data.cod === '404') {
          showFeedback('city with such name cannot be found')
        } else {
          display.showWeather(data)
          // console.log(data.message);
        }
      })
    }


    function showFeedback(text) {
      feedback.classList.add('showItem')
      feedback.innerHTML = `<span>${text}</span>`

      setTimeout(() => { feedback.classList.remove('showItem') }, 3000)
    }



  })

})()