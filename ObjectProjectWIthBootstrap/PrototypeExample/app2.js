var Super = function(color,list) {
  this.color = color;
  this.list = list
}
Super.prototype.newList = [10,10,10,10];

new Super;
var Sub = function () {};
console.log(Sub.prototype)
Sub.prototype.sayHello = function(){return "hello"};
var sub1 = new Sub();//完全覆写Sub.prototype前创建的instance
console.log(sub1)
Sub.prototype.myBaby =function () {return "baby crying..."  }
var sub3 = new Sub();
console.log(sub3)

Sub.prototype = new Super("green",[1]);//这里可以理解为对Sub的prototype进行完全覆写，因此会重新创建一个新的prototype指向Super.prototype
var sub2 = new Sub();//完全覆写Sub.prototype后创建的instance
console.log(sub2)
//验证
console.log(sub1.__proto__.constructor == Sub) //true。依然引用着原来的原型链
console.log(sub2.__proto__.constructor == Super) //true。新的instance引用了新的原型链
console.log(sub1.sayHello()) //"hello"，依然能访问原有的属性，说明还保存在内存中
// sub2.sayHello();//"对象不支持sayHello"，新的实例无法再引用原有的prototype

function NewObj(name, num){
  this.name =name;
  this.num =num;
}
NewObj.prototype.changeNum = function(c){
  this.num  =c;
}
let newObj1 = new NewObj("kemi", 10)
newObj1.changeNum(100)
console.log(newObj1.num)

NewObj.prototype.changeNum = function(c){
  this.num = c *2
}
newObj1.changeNum(100)
console.log(newObj1.num)

// newObj1.changeNum(100)
// console.log(newObj1.num)
