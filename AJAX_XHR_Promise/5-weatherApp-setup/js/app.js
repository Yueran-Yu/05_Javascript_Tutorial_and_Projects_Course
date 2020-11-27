class AjaxWeather{
  constructor(){
     this.apiKey = `d4bba8c14d1527733f651091e2088f72`
  }

  async getWeather(city){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    const weatherData = await fetch(url)
    const weather = await weatherData.json()
    return weather
  }
}



(function () {
  const form = document.querySelector('#weatherForm')
  const cityInput = document.querySelector('.cityInput')
  const feedback = document.querySelector('.feedback')
  const submitBtn = document.querySelector('#submitBtn')

  // class
 const ajax = new AjaxWeather()
 form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const cityValue = cityInput.value
    if (cityValue.length === 0) {
      showFeedback(`City value can not be empty`)
    } else {
      ajax.getWeather(cityValue).then(data => console.log(data))
    }


    function showFeedback(text) {
      feedback.classList.add('showItem')
      feedback.innerHTML = `<p>${text}</p>`

      setTimeout(() => { feedback.classList.remove('showItem') },2000)
    }



  })

})()