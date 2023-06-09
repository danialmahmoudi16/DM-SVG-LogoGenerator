// packages needed to run application
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const { validateHTMLColorHex, validateHTMLColorName } = require('validate-color')


// questions for the user to be answered
const questions = [
    {
        type: 'input',
        message: 'Choose characters for your logo. Select up to 3 characters.',
        name: 'textchar',
        validate: (response) => {
            if (response.length > 0 && response.length < 4) {
                return true;
            }
            else return 'Invalid input! Please enter 1-3 characters.';
        }
    },

    {
        type: 'input',
        message: 'Choose a text color for your logo.',
        name: 'textcolor',
        validate: (response) => {
            if (validateHTMLColorHex(response) == true || validateHTMLColorName(response) == true) {
                return true;
            }
            else return 'Invvalid input! Please enter a valid color name or hexadecimal value.';
        }
    },

    {
        type: 'list',
        message: 'Choose a shape for your logo.',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },

    {
        type: 'input',
        message: 'Choose a shape color for your logo.',
        name: 'shapecolor',
        validate: (response) => {
            if (validateHTMLColorHex(response) == true || validateHTMLColorName(response) == true) {
                return true;
            }
            else return 'Invvalid input! Please enter a valid color name or hexadecimal value.';
        }
    }
];

// Function that contains a switch case statement to determine which shape the user has selected
function generateLogo(textchar, textcolor, shape, shapecolor) {
    switch (shape) {
        case 'Circle':
            const circle = new Circle(textchar, textcolor, shapecolor);
            return circle.render();
        case 'Triangle':
            const triangle = new Triangle(textchar, textcolor, shapecolor);
            return triangle.render();
        case 'Square':
            const square = new Square(textchar, textcolor, shapecolor);
            return square.render();
    }
}

// Function to write the logo.svg file 
function writeTofile(fileName, data) {
    fs.writeFile(fileName, data,
        (err) => err ? console.log(err) : console.log("Success! logo.svg has been generated!"))
}

// Function that utilizes the user prompts to then intialize the logo
function init() {
    inquirer
        .prompt(questions)
        .then((input) => {
            textcharacter = input.textchar
            textcolor = input.textcolor
            shape = input.shape
            shapecolor = input.shapecolor
            writeTofile('logo.svg', generateLogo(textcharacter, textcolor, shape, shapecolor));

        }
        )
        .catch((error) => {
            console.log(error)
        })
}



init();