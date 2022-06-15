const Employee = require('../lib/employee')

class Manager extends Employee {
  constructor(name, title, id, email, officeNumber) {
    super(name, title, id, email)
    this.officeNumber = officeNumber
  }
  getOfficeNumber() {
    return this.officeNumber
  }
}

module.exports = Manager