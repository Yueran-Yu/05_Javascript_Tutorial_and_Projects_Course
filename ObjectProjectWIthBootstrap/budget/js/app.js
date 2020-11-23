// class must be declared first
class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.expense = document.getElementById('expense')
    this.itemList = [];
    this.itemID = 0;
  }

  // submit budget method
  submitBudgetForm() {
    const value = this.budgetInput.value
    if (value === '' || value < 0) {
      this.showFeedback(this.budgetFeedback)
    } else {
      this.budgetAmount.textContent = value
      this.budgetInput.value = ''
      this.showBalance()
    }
  }

  // show balance
  showBalance() {
    // console.log(this.balanceAmount.textContent)
    const expense = this.totalExpense()
    const total = parseInt(this.budgetAmount.textContent) - expense

    this.balanceAmount.textContent = total

    if (total < 0) {
      this.balance.classList.remove("showGreen", "showBlack")
      this.balance.classList.add("showRed")
    } else if (total > 0) {
      this.balance.classList.remove("showRed", "showBlack")
      this.balance.classList.add("showGreen")
    } else if (total === 0) {
      this.balance.classList.remove("showRed", "showGreen")
      this.balance.classList.add("showBlack")
    }
  }

  // submit expense form
  submitExpenseForm() {
    let reason = this.expenseInput.value
    let amountValue = this.amountInput.value

    if (reason === '' || amountValue === '' || amountValue < 0) {
      this.showFeedback(this.expenseFeedback)
    } else {
      let amount = parseInt(amountValue)
      this.expenseInput.value = ''
      this.amountInput.value = ''
      //创建一个expense的实例，之后push到 itemList里面去， 之后从 itemList里面获取数据，然后编辑或删除
      let expense = {
        id: this.itemID,
        title: reason,
        amount: amount
      }
      this.itemID++
      this.itemList.push(expense)
      this.addExpense(expense)
      this.showBalance()
    }

  }

  addExpense(expense) {
    const div = document.createElement('div')
    div.classList.add('expense')
    div.innerHTML = ` <div class="expense-item d-flex justify-content-between align-items-baseline">
<h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
<h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
<div class="expense-icons list-item">
 <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
  <i class="fas fa-edit"></i>
 </a>
 <a href="#" class="delete-icon" data-id="${expense.id}">
  <i class="fas fa-trash"></i>
 </a>
</div>
</div>`
    this.expenseList.appendChild(div)
  }


  // total Expense
  totalExpense() {
    let total = 0
    if (this.itemList.length > 0) {
      // this.itemList.forEach(item => {
      //   total += parseInt(item.amount)
      // })
      // reduce  function will be a better choice

      total = this.itemList.reduce((itemTotal, item) => {
        itemTotal += item.amount
        return itemTotal
      }, 0)
    }
    this.expenseAmount.textContent = total
    return total
  }

  showFeedback(feedback) {
    /* 使用 非 箭头函数时，setTimeout 方法里面的 this 指向的事 gobal的环境 */
    /*
    const self = this
    setTimeout(function(){
    console.log(this) 这里的this指向 window
    console.log(self) 这里的self指向  UI 对象
    this.budgetFeedback.classList.remove('showItem')}, 2000)
    */
    feedback.classList.add('showItem')
    feedback.innerHTML = `value cannot be empty or negative`
    setTimeout(() => feedback.classList.remove('showItem'), 2000)
  }

  // edit expense
  editExpense(element) {
    let id = parseInt(element.dataset.id)
    let parent = element.parentElement.parentElement.parentElement
    //remove from the dom
    this.expenseList.removeChild(parent)

    //remove from the list
    let expense = this.itemList.filter(item => item.id === id)

    //remove
    let tempList = this.itemList.filter(item => item.id !== id)
    this.itemList = tempList
    this.showBalance()
    this.expenseInput.value = expense[0].title
    this.amountInput.value = expense[0].amount
  }

  // delete expense
  deleteExpense(element) {
    let id = parseInt(element.dataset.id)
    let parent = element.parentElement.parentElement.parentElement
    this.expenseList.removeChild(parent)
    let tempList = this.itemList.filter(item => item.id !== id)
    this.itemList = tempList
    this.showBalance()
  }
}

function eventListener() {
  const budgetForm = document.getElementById('budget-form')
  const expenseForm = document.getElementById('expense-form')
  const expenseList = document.getElementById('expense-list')

  // new instance of UI CLASS
  const ui = new UI()

  budgetForm.addEventListener('submit', function (event) {
    event.preventDefault()
    ui.submitBudgetForm()
  })

  expenseForm.addEventListener('submit', function (event) {
    event.preventDefault()
    ui.submitExpenseForm()
  })

  expenseList.addEventListener('click', function (event) {
    event.preventDefault()
    // console.log(event.target)
    if (event.target.parentElement.classList.contains('edit-icon')) {
      ui.editExpense(event.target.parentElement)
    } else if (event.target.parentElement.classList.contains('delete-icon')) {
      ui.deleteExpense(event.target.parentElement)
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  eventListener()
})
