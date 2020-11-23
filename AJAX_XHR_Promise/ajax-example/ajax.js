const btn = document.querySelector('.btn')
const info = document.querySelector('.info')



function getData(method, url, async) {

  // create an instance
  const ajax = new XMLHttpRequest()
  console.log(ajax);
  ajax.open(method, url, async) // true: need asynchronous
  // whenever we are the data, we need to decide to what will gonna do of the data.
  // ajax.onreadystatechange = function () {
  //   // 'this' will point to the (instance) data we have
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //     info.textContent = this.responseText
  //   }
  // }
  ajax.onload = function () {
    if (this.status === 200) {
      info.textContent = this.responseText
    } else {
      console.log(this.statusText);
    }
  }

  ajax.onerror = function () {
    console.log('there was an error');
  }

  ajax.send()
}

btn.addEventListener('click', function () {
  getData("GET", "content.txt", true)
})