const Employee = require('../lib/employee')

class Intern extends Employee {
  constructor(name, title, id, email, school) {
    super(name, title, id, email)
    this.school = school
  }
  getSchool() {
    return this.school
  }
  renderClassSpec() {
    return `School: ${this.school}`
  }
}

module.exports = Intern