
// js 常用的创建对像的方式
function Person(name, age){
  this.name = name;
  this.age = age;
};

Person.prototype.say = function(){
    console.log("这里是 person 的实例方法")
}

Person.show = function(){
   console.log("这是 Person 的静态 show 方法")
}

const p = new Person("小狗", 2);

p.say()
Person.show()

console.log(
  "===================================== 分割线 ============================="
);


// 创建了一个动物类
class Animal {
  // 类构造器
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  jiao() {  
    console.log("这是 Animal 的实例方法");
  }

  static show(){
      console.log("这是 Animal 的静态方法")
  }

}

const a = new Animal("小狗", 2);
console.log("class 创建的对象: ", a);
a.jiao()
Animal.show()