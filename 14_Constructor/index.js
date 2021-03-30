class Person {

    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
      document.write(`Hello, my name is ${this.name}`);
    }
  
  }
  
  const myName = new Person('Hassan');
  
  myName.introduce();