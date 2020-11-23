const btn = document.querySelector(".btn")
const cartInfo = document.querySelector(".cartInfo")
const itemInfo = document.querySelector(".itemInfo")

btn.addEventListener('click', function(){
  getData("GET", "cart.json")
})

function getData(method, url){
  const  ajax = new XMLHttpRequest()
  ajax.open(method, url, true)


}