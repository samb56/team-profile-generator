const Employee = require('../lib/employee')

class Engineer extends Employee {
  constructor (name, title, id, email, github){
    super(name, title, id, email)
    this.github = github
  }
  getGithub(){
    return this.github
  }
  renderClassSpec(){
    return `GitHUb: <a href="https://github.com/${this.github}">${this.github}</a>`
  }
  
}

module.exports = Engineer