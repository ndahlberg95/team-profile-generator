const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Dave', 123, 'dave@email.com');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('dave@email.com');
  
});

test('getRole function', () => {
  const employee = new Employee('Dave', 123, 'dave@email.com');

  expect(employee.getRole()).toBe('Employee');

});