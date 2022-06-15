const generateEmployee = require('../lib/employee')

test('takes user input to create a profile card for an employee', () => {
  expect(generateEmployee(Dan, engineer, 3, dan@fakeemail.com)).toBe('')
})