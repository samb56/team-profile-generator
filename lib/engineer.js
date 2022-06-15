const Employee = require('../lib/employee')

class Engineer extends Employee {
  constructor (name, title, id, email, github){
    super(name, title, id, email)
    this.github = github
  }
  getGithub(){
    return this.github
  }
}

module.exports = Engineer