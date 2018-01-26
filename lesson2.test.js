import lesson2 from '../src/lesson2';

const {
  sum, sumAll, pow, random,
} = lesson2.task;

describe('sum function', () => {
  test('sum works good', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('sumAll function', () => {
  test('sumAll works good', () => {
    expect(sumAll(1, 2, 3)).toBe(6);
    expect(() => sumAll(1, {})).toThrow();
  });
});

describe('pow function', () => {
  test('pow works good', () => {
    expect(pow(2, 10)).toBe(1024);
  });
});

describe('random function', () => {
  test('random works good', () => {
    const rand = random(-20, 511);
    expect(rand).toBeGreaterThanOrEqual(-20);
    expect(rand).toBeLessThanOrEqual(511);
  });
});
