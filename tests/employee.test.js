const Employee = require('../lib/employee')

test('takes user input to create a profile card for an employee', () => {
  const emp = new Employee('dan', 'engineer', 3, 'fake@email.com')
  expect(emp.name).toBe('dan')
  expect(emp.title).toBe('engineer')
  expect(emp.id).toBe(3)
  expect(emp.email).toBe('fake@email.com')
  expect(typeof (emp)).toBe('object')
})