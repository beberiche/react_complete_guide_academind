// class Human {
//   gender = "male";

//   printGender = () => {
//     console.log(this.gender);
//   };
// }

// class Person extends Human {
//   name = "max";
//   // gender = "female";

//   printMyName = () => {
//     console.log(this.name);
//   };
// }
// const person = new Person("beberiche", "male");
// person.printMyName();
// person.printGender();

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// const user = new User("보라");
// console.dir(user._name);

// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(value) {
//     // if (value < 0) {
//     //   throw Error("age can not be negative");
//     // }
//     this._age = value;
//   }
// }

// const user1 = new User("Steve", "jobs", -1);
// console.log(user1.age);

// class Experiment {
//   publicField = 2;
//   #privateField = 0;

//   get privateField() {
//     return this.#privateField;
//   }

//   set privateField(value) {
//     this.#privateField = value;
//   }
// }

// const experiment = new Experiment();
// console.log(experiment.publicField);
// console.log(experiment.privateField);

// class Article {
//   static publisher = "교보문고";
//   constructor(articleNumber) {
//     this.articleNumber = articleNumber;
//   }

//   static printPublisher() {
//     console.log(this.publisher);
//   }
// }

// const article1 = new Article(1);
// const article2 = new Article(2);

// console.log(Article.publisher);
// Article.printPublisher();

// class Counter {
//   constructor() {
//     this.counter = 0;
//   }

//   increase() {
//     console.log(++this.counter);
//     if (this.counter % 5 === 0) {
//       console.log("yo");
//     }
//   }
//   decrease() {
//     console.log(--this.counter);
//   }
// }

// const coolCounter = new Counter();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

// class User {
//   name = "보라";

//   sayHi() {
//     alert(`${this.name}님 안녕하세요!`);
//   }
// }

// console.log(User.prototype);

// new User().sayHi(); // 보라님 안녕하세요!

// let rabbit = {
//   jumps: true,
// };

// let animal = {
//   eats: true,
//   walk() {
//     alert("동물이 걷습니다.");
//   },
// };

// rabbit.__proto__ = animal;
// animal.__proto__ = rabbit;

// console.log(rabbit.eats);
// console.log(animal.jumps);

let animal = {
  eats: true,
  jump: 100,
};

let rabbit = Object.create(animal, { sleep: { value: 200, configurable: true } });
// console.log(Object.getOwnPropertyDescriptors(animal));
Object.defineProperty(rabbit, "sleep", { writable: true });
rabbit.sleep = 300;
console.log(rabbit.sleep);

// console.log(Object.getOwnPropertyDescriptor(rabbit, "sleep"));
// console.log(rabbit.sleep);
// animal.jump = 100;
// console.log(Object.getPrototypeOf(rabbit));

// console.log(Object.getPrototypeOf(animal));
