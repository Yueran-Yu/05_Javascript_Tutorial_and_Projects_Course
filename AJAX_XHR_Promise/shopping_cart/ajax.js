const btn = document.querySelector(".btn")
const cartInfo = document.querySelector(".cartInfo")
const itemInfo = document.querySelector(".itemInfo")

btn.addEventListener('click', function(){
  getData("GET", "cart.json")
})

function getData(method, url){
  const  ajax = new XMLHttpRequest()
  ajax.open(method, url, true)

  ajax.onload = function(){
    if(this.status === 200){
      cartInfo.textContent = this.responseText
      const obj = JSON.parse(this.responseText)
      cartInfo.innerHTML = `<p>${obj.cartInfo.name}</p><p>${obj.cartInfo.store}</p>`

      const specItems = obj.cartItems.filter(item=> item.price > 5)
      let display = ''
      specItems.forEach(function(item){
        display+= `<div class="item">
        <p>item id: ${item.id}</p>
        <p>item name: ${item.name}</p>
        <p>item price: ${item.price}</p>
        </div>`
      })

      itemInfo.innerHTML = display
    }else{
        console.log(this.statusText);
    }
  }

  ajax.onerror = function(){
    console.log("there was an error");
  }
  ajax.send()
}