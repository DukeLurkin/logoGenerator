const fs = require('fs');



class Shape {
    constructor() {
      this.color = "";

    }
    setColor(color) {
      this.color = color;
    }
    render() {
      // To be implemented in the child classes
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  

//     const shape = new Triangle();
// shape.setColor("blue");
// console.log(shape.render());
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

module.exports = {
    Triangle, Circle, Square
}