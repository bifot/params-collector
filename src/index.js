module.exports = (...args) => {
  // express
  if (args.length === 3) {
    args[0].params = {
      ...args[0].params,
      ...args[0].query,
      ...args[0].body,
    };
  }

  // koa
  if (args.length === 2) {
    args[0].params = {
      ...args[0].params,
      ...args[0].query,
      ...args[0].request.body,
    };
  }

  // call next
  return args.length === 3 ? args[2]() : args[1]();
};
