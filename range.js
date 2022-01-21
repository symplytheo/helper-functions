const range = (options) => {
  const { from = 0, step = 1, to } = options;

  if (!to) {
    throw Error('"to" must be specified');
  }

  if (to <= from) {
    throw Error(`"to (${to})" is lesser than or equal to "from (${from})"`);
  }

  return Array.from(
    { length: Math.ceil((to - from) / step) },
    (_, i) => i * step + from
  );
};

// Usage
const r1 = range({ to: 10 });
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const r2 = range({ from: 10, to: 20 });
// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

const r3 = range({ from: 10, to: 20, step: 3 });
// [10, 13, 16, 19]
