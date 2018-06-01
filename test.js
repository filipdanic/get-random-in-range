const test = require('tape');
const randomInRange = require('./readme');

test('it just works', (t) => {
  t.plan(1000);
  for (let i = 0; i < 500; i += 1) {
    const t1 = randomInRange()()();
    t.equal(t1 >= 0 && t1 <= 100, true);
    const t2 = randomInRange(-100)(100)();
    t.equal(t2 >= -100 && t2 <= 100, true);
  }
  t.end();
});

