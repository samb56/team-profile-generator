const fs = require("fs");
const inquirer = require("inquirer");


inquirer.prompt([
  {
    type: 'list',
    name: 'position',
    message: ['manager', 'engineer', 'intern'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'what is the name of the employee?',
  },
  {
    type: 'input',
    name: 'ID',
    message: 'what is the ID number of the employee?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'provide a description of how to use the application',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'who are the collaborators who worked on the project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'what are the steps to perform a test oh the application?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'what license have you chosen for the project?',
    choices: ['GNU AGPLv3', 'MIT', 'Apache License 2.0', 'the unlicense'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'what is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what email can you be reached at?',
  },
])
  .then((data) => {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!'));
    console.log(data)
  })