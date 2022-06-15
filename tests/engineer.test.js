const Engineer = require('../lib/engineer')

test('adds github link to employee profile', () => {
  const emp = new Engineer('frank', 'manager', 4, 'fake@email.com', 'github.com/fakefake')
  expect(emp.name).toBe('frank')
  expect(emp.title).toBe('manager')
  expect(emp.id).toBe(4)
  expect(emp.email).toBe('fake@email.com')
  expect(emp.github).toBe('github.com/fakefake')
  expect(typeof (emp)).toBe('object')
})