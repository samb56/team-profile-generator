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
    name: 'email',
    message: 'what is the email of the employee?',
  },
  
])
  .then((data) => {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!'));
    console.log(data)
  })