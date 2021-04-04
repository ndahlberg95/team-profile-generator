const Engineer = require('../lib/Engineer.js');

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(engineer.email))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
}

test('creates an engineer object', () => {
  const engineer = new engineer('Dave');

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toEqual(expect.any(Number));
  ValidateEmail()
  expect(engineer.github).toBe('Dave');

});