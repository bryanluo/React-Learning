// js 常用的创建对像的方式
const Person = (name, age) =>{
    this.name = name
    this.age = age
}

const p = new Person("小狗", 2)
console.log('js 创建的对象: ', p)

console.log("===================================== 分割线 =============================")

// 创建了一个动物类
class Animal {
    // 类构造器
    constructor(name, age){
        this.name = name
        this.age = age
    }

  static test = "这个是静态属性"

}

const a =  new Animal("小狗", 2)
console.log("class 创建的对象: ", a)
console.log(Animal.test)