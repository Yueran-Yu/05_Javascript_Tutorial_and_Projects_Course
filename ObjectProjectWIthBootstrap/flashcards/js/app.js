// event listeners
function eventListeners() {
  const showBtn = document.getElementById("show-btn")
  const questionCard = document.querySelector('.question-card')
  const closeBtn = document.querySelector('.close-btn')
  const submitBtn = document.querySelector('.submitBtn')
  const form = document.querySelector('#question-form')
  const feedback = document.querySelector('.feedback')
  const questionInput = document.getElementById('question-input')
  const answerInput = document.getElementById('answer-input')
  const questionList = document.getElementById('questions-list')
  let data = []
  let id = 1

  //new ui instance
  const ui = new UI()
  // show question form
  showBtn.addEventListener('click', function () {
    ui.showQuestion(questionCard)
  })

  // hide question form
  closeBtn.addEventListener('click', function () {
    ui.hideQuestion(questionCard)
  })

  // add question
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const questionValue = questionInput.value
    const answerValue = answerInput.value

    if (questionValue === '' || answerValue === '') {
      feedback.classList.add('showItem', 'alert-danger')
      feedback.textContent = 'cannot add empty values'
      setTimeout(function () {
        feedback.classList.remove('alert-danger', 'showItem')
      }, 3000)
    } else {
      const question = new Question(id, questionValue, answerValue)

      // 在form 表单里 添加新的 question到  data 列表里面去
      // 这样后面的 点击“edit”的时候就能 更新 这个 data 列表
      data.push(question)
      id++
      // console.log(data, id)
      ui.addQuestion(questionList, question)
      ui.clearFields(questionInput, answerInput)

    }
  })

  questionList.addEventListener('click', function (event) {
    event.preventDefault()
    if (event.target.classList.contains('delete-flashcard')) {
      questionList.removeChild(event.target.parentElement.parentElement.parentElement)
    } else if (event.target.classList.contains('show-answer')) {
      // show  /  hide the answer
      event.target.nextElementSibling.classList.toggle('showItem')
    } else if (event.target.classList.contains('edit-flashcard')) {
      // delete question from dom
      let id = event.target.dataset.id
      //这个在remove的时候，把parent的整个div都删除了，然后在edit和delete里面的data-id就会被删除掉
      questionList.removeChild(event.target.parentElement.parentElement.parentElement)
      // open question card
      ui.showQuestion(questionCard)

      // specific question
      const tempQuestion = data.filter(item => item.id === parseInt(id))

      // rest of the data
      // 因为我们创建了一个data[]数组，专门用来储存没有点击‘edit’按钮的questions
      // 这样  data  数组就是 专门展示 剩下的 questions了
      let tempData = data.filter(item => item.id !== parseInt(id))
      data = tempData
      questionInput.value = tempQuestion[0].title
      answerInput.value = tempQuestion[0].answer
    }
  })
}

// show question card
UI.prototype.showQuestion = function (element) {
  element.classList.add('showItem')
}

// hide question card
UI.prototype.hideQuestion = function (element) {
  element.classList.remove('showItem')
}

// add question
UI.prototype.addQuestion = function (element, question) {
  const div = document.createElement('div')
  div.classList.add('col-md-4')
  div.innerHTML = `<div class="card card-body flashcard my-3">
    <h4 class="text-capitalize">${question.title}</h4>
    <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
    <h5 class="answer mb-3">${question.answer}</h5>
    <div class="flashcard-btn d-flex justify-content-between">
     <a href="#" id="edit-flashcard" class="btn my-1 edit-flashcard text-uppercase" data-id="${question.id}">edit</a>
     <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase data-id="${question.id}">delete</a>
    </div>
   </div> `
  element.appendChild(div)
}

UI.prototype.clearFields = function (questionInput, answerInput) {
  questionInput.value = ''
  answerInput.value = ''
}

// question constructor
function Question(id, title, answer) {
  this.id = id
  this.answer = answer
  this.title = title
}

//UI constructor
function UI() {
}

// dom event listener
document.addEventListener('DOMContentLoaded', function () {
  eventListeners();
})



