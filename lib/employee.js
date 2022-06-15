


class Employee {
  constructor(name, title, id, email)
  this.name = name
  this.title = title
  this.id = id
  this.email = email
  
}
function generateEmployee(data) {
  return new.Employee(data.name, data.title, data.id, data.email)
  console.log(Employee)
}

module.exports = generateEmployee