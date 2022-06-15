const fs = require("fs");
const inquirer = require("inquirer");


inquirer.prompt([
  {
    type: 'list',
    name: 'title',
    choices: ['manager', 'engineer', 'intern'],
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
  printData(data, (err) =>
    err ? console.log(err) : console.log('Success!'));
  console.log(data)
})

function printData(data){
  console.log(data)
}
// fs.writeFile('README.md', generateMarkdown(data)