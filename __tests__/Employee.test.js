const Employee = require('../lib/Employee.js');

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(employee.email))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
}

test('creates an employee object', () => {
  const employee = new Employee('Dave');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(expect.any(Number));
  ValidateEmail()
  
});