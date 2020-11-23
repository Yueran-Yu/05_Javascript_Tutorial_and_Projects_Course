(function () {
  // check fields and hide the submit
  document.addEventListener('DOMContentLoaded', function () {
    const display = new Display()
    display.checkFields()
    display.hideSubmit()
  })

  // add customer on submit
  const fieldForm = document.querySelector('#customer-form')
  fieldForm.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(this)
    const name = this.querySelector('.name')
    const course = this.querySelector('.course')
    const author = this.querySelector('.author')

    const customer = new Customer(name.value, course.value, author.value)
    // console.log(customer)
    const display = new Display()
    display.feedback(customer)
    display.clearFields()
  })

  // display constructor function
  function Display() {
    this.name = document.getElementById('name')
    this.course = document.getElementById('course')
    this.author = document.getElementById('author')
    this.customers = document.querySelector('.customer-list')

  }

  // check fields
  Display.prototype.checkFields = function () {
    //被哪一个调用的 就哪一个触发该方法
    // console.log(this)
    this.name.addEventListener('blur', this.validateField)
    this.course.addEventListener('blur', this.validateField)
    this.author.addEventListener('blur', this.validateField)
    // this.customers.addEventListener('blur', this.validateField)
  }

  // validate each field 视频里教的这个代码，我几乎没见过，所以原型很重要？？？
  // 为啥这个方法 不能 不挂在 原型上？？
  Display.prototype.validateField = function () {
    // console.log(this)
    if (this.value === "") {
      this.classList.remove("complete")
      this.classList.add("fail")
    } else {
      this.classList.add("complete")
      this.classList.remove("fail")
    }
    const customerForm = document.getElementById('customer-form')
    const complete = customerForm.querySelectorAll(".complete")
    console.log(complete.length)
    document.querySelector(".submitBtn").disabled = complete.length === 3 ? false : true
  }


  //show loading and feedback
  Display.prototype.feedback = function (customer) {
    // console.log(this)
    const feedback = document.querySelector('.feedback')
    const loading = document.querySelector('.loading')
    feedback.classList.add('showItem', 'alert', 'alert-success')
    loading.classList.add('showItem')
    const self = this
    self.hideSubmit()
    setTimeout(function () {
      feedback.classList.remove('showItem', 'alert', 'alert-success')
      loading.classList.remove('showItem')
      self.addCustomer(customer)
      // console.log(self)
      // here "this" point back to a window object
      // console.log("Test this: " +this)
    }, 1000)
  }

  //disable submit
  Display.prototype.hideSubmit = function () {
    const btn = document.querySelector('.submitBtn')
    //查看CSS  有专门的 关于 :disabled 的写法
    btn.disabled = true
  }

  Display.prototype.addCustomer = function (customer) {
    console.log(customer)
    const divContainer = document.createElement("div")
    const ramNum = this.getRandom()
    divContainer.classList.add("col-11", "mx-auto", "col-md-6", "col-lg-4", "my-3")

    divContainer.innerHTML =
      `<div class="card text-left">
    <img src="img/cust-${ramNum}.jpg" class="card-img-top" alt="">
    <div class="card-body">
     <!-- customer name -->
     <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${customer.name}</span></h6>
     <!-- end of customer name -->
     <!-- customer name -->
     <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">${customer.course}</span></h6>
     <!-- end of customer name -->
     <!-- customer name -->
     <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${customer.author}</span></h6>
     <!-- end of customer name -->
    </div>
   </div>`
    this.customers.appendChild(divContainer)
  }

  Display.prototype.getRandom = function () {
    let randomNumber = Math.floor(Math.random() * 5 + 1)
    return randomNumber
  }

  Display.prototype.clearFields = function () {
    // console.log(this)
    // here, "this" point back to the display function
    this.name.value = ''
    this.course.value = ''
    this.author.value = ''
    this.name.classList.remove('complete', 'fail')
    this.course.classList.remove('complete', 'fail')
    this.author.classList.remove('complete', 'fail')
  }
  //customer constrcutor function
  function Customer(name, course, author) {
    this.name = name
    this.course = course
    this.author = author
  }
})();




/*自身属性相当于自营店
  prototype属性相当于外挂店
  他们是两个块独立的储存空间，各自new 一个instance,修改里面的值，都不会影响到对方的空间领地
  修改外挂店 => prototype 挂钩的方法的值时， 自营店的instance去调用的该方法时，值是随着prototype修改的值而改变的 */