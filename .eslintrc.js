module.exports = {
  extends: require.resolve('./index'),
  rules: {
    'no-magic-numbers': [
      0,
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        detectObjects: false,
        enforceConst: true,
      },
    ],
  },
};
