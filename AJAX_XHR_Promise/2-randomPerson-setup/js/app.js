const btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
  getDataOriginal().then(data => getData(data, showData)).catch(error => console.log(error))


  // fetch("https://randomuser.me/api/")
  //   .then(data => data.json())
  //   .then(data => getData(data, showData))
  //   .catch(error => console.log(error))
})

// const ajax = new Promise((resolve, reject) => {
//   const url = "https://randomuser.me/api/"
//   const xhr = new XMLHttpRequest()
//   xhr.open('GET', url, true)

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       resolve(xhr.responseText)
//     } else {
//       reject(Error(xhr.statusText))
//     }
//   }
//   xhr.onerror = () => {
//     reject(Error('there was an error'))
//   }
//   xhr.send()
// })

// function getPerson(getDataCallback) {
//   const url = "https://randomuser.me/api/"
//   const method = "GET"
//   const ajax = new XMLHttpRequest()
//   ajax.open(method, url, true)

//   ajax.onload = function () {
//     if (this.status === 200) {
//       getDataCallback(this.responseText, showData)
//     } else {

//     }
//   }
//   ajax.onerror = function () {
//     console.log("here is an error")
//   }
//   ajax.send()
// }

function getData(responseText, showDataCallBack) {
  // const data = JSON.parse(responseText)

  const { name: { first }, name: { last }, picture: { large }, location: { street: { number: sNumber }, street: { name: sName } }, phone, email } = responseText.results[0]

  showDataCallBack(first, last, large, sNumber, sName, phone, email)
}

function showData(first, last, large, sNumber, sName, phone, email) {
  document.querySelector('#first').textContent = first
  document.querySelector('#last').textContent = last
  document.querySelector('#photo').src = large
  document.querySelector('#street').textContent = `${sNumber}  ${sName}`
  document.querySelector('#phone').textContent = phone
  document.querySelector('#email').textContent = email
  console.log(first, last, large, street, phone, email);
}

// fetch("https://randomuser.me/api").then(data => data.json()).then(data => console.log(data)).catch(error => console.log(error))


// function externalData(url) {
//   // new Promise object, pass the callback function
//   return new Promise(function(resolve, reject) {
//     if (url.length > 0) {
//       resolve("response data.")
//     } else {
//       reject("there was an error.")
//     }
//   })
// }

// externalData("url").then(data => console.log(data)).catch(error => console.log(error))


const getDataOriginal = async function(){
  const url = "https://randomuser.me/api"
  const result = await fetch(url)
  const response = await result.json()
  return response
}