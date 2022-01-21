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
