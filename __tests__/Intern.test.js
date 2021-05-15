const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
  const intern = new Intern('Dave', 123, 'dave@email.com', 'Bates');

  expect(intern.name).toBe('Dave');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe('dave@email.com');
  expect(intern.school).toBe('Bates')

});

test('getRole function', () => {
  const intern = new Intern('Dave', 123, 'dave@email.com');

  expect(intern.getRole()).toBe('Intern');

});