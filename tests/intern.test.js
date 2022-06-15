const Intern = require('../lib/intern')

test('adds school name to employee profile', () => {
  const emp = new Intern('sue', 'intern', 7, 'fake@email.com', 'fakeUniversity')
  expect(emp.name).toBe('sue')
  expect(emp.title).toBe('intern')
  expect(emp.id).toBe(7)
  expect(emp.email).toBe('fake@email.com')
  expect(emp.school).toBe('fakeUniversity')
  expect(typeof (emp)).toBe('object')
})