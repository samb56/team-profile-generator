const Manager = require('../lib/manager')

test('adds office number to employee profile', () => {
  const emp = new Manager('lorie', 'manager', 1, 'fake@email.com', 2)
  expect(emp.name).toBe('lorie')
  expect(emp.title).toBe('manager')
  expect(emp.id).toBe(1)
  expect(emp.email).toBe('fake@email.com')
  expect(emp.officeNumber).toBe(2)
  expect(typeof (emp)).toBe('object')
})
