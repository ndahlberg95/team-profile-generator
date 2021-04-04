const Manager = require('../lib/Manager.js');

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(manager.email))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
}

test('creates an manager object', () => {
  const manager = new Manager('Dave');

  expect(manager.name).toBe('Dave');
  expect(manager.id).toEqual(expect.any(Number));
  ValidateEmail()

});