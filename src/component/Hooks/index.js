// import { useState } from 'react';
// function Example() {
//   const [count, setCount] = useState;
//   return (
//     <div>
//       {count}
//       <buttoo onClick={() => setCount(count + 1)}>加1</buttoo>
//     </div>
//   )
// }
import React from 'react';
export default class Hooks extends React.Component {
  componentDidMount(){
    class Logger {
      printName(name = 'there') {
        this.print(`Hello ${name}`);
      }
    
      print(text) {
        console.log(text);
      }
      a = () => {
        console.log(123)
      }
      a(){
        console.log(456)
      }
    }
    Logger.prototype.m = 178
    
    const logger = new Logger();
    console.log(logger)
    console.log(logger.a)
    // logger.a()
    // const { printName, hasOwnProperty, a, m } = logger;
    // console.log(a, m)
    // console.log(logger)
    // console.log(hasOwnProperty,1)
    // console.log(printName)
    // printName();

    // 关于super的理解---super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。箭头函数的声明的方法在当前this上，不在原型对象上，通过super拿不到
    // class A {
    //   func = () => {
    //     console.log(123)
    //   }
    // }
    // class B extends A {
    //   constructor(){
    //     super()
    //     console.log(super.func)
    //   }
    // }
    // new B()

    // prototype 和 __proto__
    // class A {
    // }
    
    // class B extends A {
    // }
    
    // console.log(B.__proto__ === A)// true
    // console.log(B.__proto__ === B.prototype)// false
    // console.log(B.prototype.__proto__ === A.prototype) // true
  }
  render(){
    return 123
  }
}


/**
 * class 类静态方法
 * 在方法前面加上static关键字，改方法不会被实例继承，而是直接通过类来调用---静态方法
 * 如果静态方法包含this关键字，这个this指的是类，而不是实例。
 * 
 * class 类的静态属性
 * 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
 * S6 明确规定，Class 内部只有静态方法，没有静态
 * 最新的：类的静态属性只要在实例属性写法前面，加上static关键字就可以了。
 * 
 * class 类的实例属性
 * 类的实例属性可以用等式，写入类的定义之中。
 * 
 * new.target 属性这个属性可以用来确定构造函数是怎么调用的。
 * 用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined
 * 
 * Object.getPrototypeOf方法可以用来从子类上获取父类。可以使用这个方法判断，一个类是否继承了另一个类。
 * Object.getPrototypeOf(ColorPoint) === Point
 * 
 * 
 * 在子类的构造函数constructor中super的作用类似：A.prototype.constructor.call(this)
 * 
 * 对象的解构会解构出对象原型上的方法和属性，类似属性的查找原则
 * 
 * 
 * es6修饰器decorator使用
 * 修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。也就是说，修饰器本质就是编译时执行的函数。
 * 
 * 
 */

// export function mixins(...list){
//   return funciton (target) {
//     Object.assign(target.prototype, ...list)
//   }
// }
// import { mixins } from './mixins'
// const Foo = {
//   foo(){
//     console.log('foo')
//   }
// }
// @mixins(Foo)
// class MyClass{}

// let obj = new MyClass()