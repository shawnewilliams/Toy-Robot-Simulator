const Robot = require('./robot');

test('Robot is a class', () => {
  expect(typeof Robot.prototype.constructor).toEqual('function');
});

test('Robot is in the correct position and orientation', () => {
  const r = new Robot();
  r.place(0,0,'NORTH');
  let actions = ['MOVE', 'RIGHT', 'MOVE', 'REPORT'];
  let time = actions.length
  r.go(actions);
  setTimeout(() => {
    expect(r.report()).toBe({x: 1, y: 1, orientation: 'EAST'});
  },500 * time);
});