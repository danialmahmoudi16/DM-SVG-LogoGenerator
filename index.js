// packages needed to run application
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes.js');
const {colorhexadec, colorname} = require ('color')

// questions for the user to be answered
const questions = [
    {
        type: 'input',
        message: 'Choose characters for your logo. Select up to 3 characters.',
        name: 'textchar',
        validate: (response) => {
            if (response.textchar.length > 0 && response.textchar.length < 4 ) {
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
            if (colorhexadec(response) == true && colorname == true) {
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
            if (colorhexadec(response) == true && colorname == true) {
                return true;
            }
            else return 'Invvalid input! Please enter a valid color name or hexadecimal value.';
        }
    }
]