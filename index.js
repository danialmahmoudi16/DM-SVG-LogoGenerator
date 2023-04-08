// packages needed to run application
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes.js')

// questions for the user to be answered
const questions = [
    {
        type: 'input',
        message: 'Choose characters for your logo. Select up to 3 characters.',
        name: 'textchar'
    },

    {
        type: 'input',
        message: 'Choose a text color for your logo.',
        name: 'textcolor'
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
        name: 'shapecolor'
    }
]