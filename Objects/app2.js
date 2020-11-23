// Inheritance
// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student


function Person(name, lastName){
  this.name = name
  this.lastName = lastName
}

Person.prototype.school = "crystal grove high shcool"
Person.prototype.greet = function(){
  console.log(`
  Hello I'm ${this.name} ${this.lastName} and I'm ${this.role} in the ${this.school}
  `)
}

function Student(name, lastName, honorStudent){
  Person.call(this, name, lastName)
  this.honorStudent = honorStudent
}
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
Student.prototype.role = "student"
Student.prototype.answerQuestion = function(){
console.log(`and the answer is...`)
}

const john = new Student("john", "conor")
console.log(john)
john.greet()
john.answerQuestion()

function Teacher(name, lastName){
 Person.call(this, name, lastName)
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher
Teacher.prototype.role = "teacher"
Teacher.prototype.askQuestion = function(){
console.log(`and the question is...`)
}

const sara = new Teacher("sara", "jordan")
console.log(sara)