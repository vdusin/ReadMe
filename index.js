// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMardown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the desciption?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What do you need to install?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the applications usage?',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license did you use?',
        choices: ["MIT", "Apache", "Mozilla", "No License"]
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log('init')
    inquirer.prompt(questions).then((data) =>{
        console.log(data)
    })
}

// Function call to initialize app
init();
