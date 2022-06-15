const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
const { inherits } = require("util");

const savedCards = []
let asking = true




init()

function init() {

  inquirer.prompt([
    {
      type: 'list',
      name: 'title',
      message: 'what is the position of the employee?',
      choices: ['manager', 'engineer', 'intern'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'what is the name of the employee?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is the ID number of the employee?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is the email of the employee?',
    },
    {
      when: data => data.title === 'manager',
      type: 'input',
      name: 'officeNumber',
      message: 'what is the office number for this manager?',

    },
    {
      when: data => data.title === 'engineer',
      type: 'input',
      name: 'github',
      message: 'what is the github name for this engineer?',

    },
    {
      when: data => data.title === 'intern',
      type: 'input',
      name: 'school',
      message: 'what school is the intern attending or has attended?',

    },
    {

      type: 'list',
      name: 'repeat',
      message: 'would you like to add another employee?',
      choices: ['yes', 'no'],
    }




  ])
    .then((data) => {
      savedCards.push(renderCard(renderClass(data)))
      if (data.repeat === 'no') {

        asking = false;
        fs.writeFile('index.html', renderSite(savedCards.join('')), (err) =>
          err ? console.log(err) : console.log('Success!'));
        console.log(data)
      } else { init() }

    })
}
function printData(data) {
  console.log(data)
}
function renderClass(data) {
  switch (data.title) {
    case 'manager':
      return new Manager(data.name, data.title, data.id, data.email, data.officeNumber)

    case 'engineer':
      return new Engineer(data.name, data.title, data.id, data.email, data.github)

    case 'intern':
      return new Intern(data.name, data.title, data.id, data.email, data.school)
  }

}

function renderCard(data) {
  return `
  <div class="card bg-success text-white" style="width: 18rem;">
  <img src="" alt="">
  <div class="card-body">
    <h4 class="card-title">${data.name}</h4>
    <h5>${data.title}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">email: <a href="mailto:${data.email}">${data.email} </a></li>
      <li class="list-group-item">${data.renderClassSpec()}</li>
    </ul>
  </div>
</div>`
}

function renderSite(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./assets/script.js">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

  <title>Team Profile Generator</title>
</head>
<body class="bg-success bg-opacity-50">

<h1 class="text-center text-bg-success text-white">My Team</h1>
${data}













  
  
</body>
</html>`

}
// fs.writeFile('README.md', generateMarkdown(data)