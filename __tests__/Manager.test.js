const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
  const manager = new Manager('Dave');

  expect(manager.name).toBe('Dave');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe('dave@email.com');
  expect(manager.officeNumber).toEqual(expect.any(Number));

});

test('getRole function', () => {
  const manager = new manager('Dave', 123, 'dave@email.com');

  expect(manager.getRole()).toBe('Manager');

});