const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
  const engineer = new engineer('Dave');

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe('dave@email.com');
  expect(engineer.github).toBe('Dave');

});

test('getRole function', () => {
  const engineer = new engineer('Dave', 123, 'dave@email.com');

  expect(engineer.getRole()).toBe('Engineer');

});