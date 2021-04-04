const Intern = require('../lib/Intern.js');

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(intern.email))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
}

test('creates an intern object', () => {
  const intern = new Intern('Dave');

  expect(intern.name).toBe('Dave');
  expect(intern.id).toEqual(expect.any(Number));
  ValidateEmail ()
  expect(intern.school).toBe('Bates')

});