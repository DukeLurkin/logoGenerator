const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes');


inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: function (input) {
        if (input.length > 3) {
          return "Please enter up to three characters.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Enter a color keyword or a hexadecimal number for the text (e.g. 'red' or '#ff0000'):",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Enter a color keyword or a hexadecimal number for the shape (e.g. 'blue' or '#0000ff'):",
    },
  ])
  .then((answers) => {console.log(answers);
    let userShape;
    if(answers.shape === "Triangle"){
    userShape = new shape.Triangle();
}
if(answers.shape === "Circle"){
    userShape = new shape.Circle();
}
if(answers.shape === "Square"){
    userShape = new shape.Square();
}
const userText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`
userShape.setColor(answers.shapeColor);

const logo = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${userShape.render()}
${userText}
</svg>
`

    fs.writeFileSync("logo.svg", logo, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))









});