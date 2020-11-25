const btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
  getPerson(getData)
})

function getPerson(getDataCallback){
  const url = "https://randomuser.me/api/"
  const method = "GET"
  const ajax = new XMLHttpRequest()
  ajax.open(method, url, true)

  ajax.onload = function(){
    if(this.status === 200){
      getDataCallback(this.responseText, showData)
    }else{

    }
  }
  ajax.onerror = function(){
    console.log("get data");
  }
  ajax.send()
}

function getData(responseText, showDataCallBack){
  const data = JSON.parse(responseText)

  const {name:{first}, name:{last}, picture:{large}, location: {street:{number: sNumber}, street:{name: sName}}, phone, email} = data.results[0]


  showDataCallBack(first, last, large, sNumber, sName, phone, email)
}

function showData(first, last, large, sNumber, sName, phone, email){
  document.querySelector('#first').textContent = first
  document.querySelector('#last').textContent = last
  document.querySelector('#photo').src = large
  document.querySelector('#street').textContent = `${sNumber}  ${sName}`
  document.querySelector('#phone').textContent = phone
  document.querySelector('#email').textContent = email
  console.log(first, last, large, street, phone, email);
}