// @ts-ignore
export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    // @ts-ignore
    action[argNames[index]] = args[index];
  });
  return action;
};
