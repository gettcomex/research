const samples = [
  {
    name: '9007199254740992 + 1',
    run: ({ reference }) => reference('9007199254740992').plus('1'),
    expected: '9007199254740993',
  },
  {
    name: '(0.1 + 0.2 - 0.1) * 1.5 / 3',
    run: ({ reference }) => reference('0.1').plus('0.2').minus('0.1').times('1.5').div('3'),
    expected: '0.1',
  },
  {
    name: '0.1 + 0.2',
    run: ({ reference }) => reference('0.1').plus('0.2'),
    expected: '0.3',
  },
  {
    name: '4.1414999961853027 ** 2',
    run: ({ reference }) => reference('4.1414999961853027').pow(2),
    expected: '17.15202221840286227865191549062729',
  },
  {
    name: '17.1520222184028622786519 ** 2',
    run: ({ reference }) => reference('17.1520222184028622786519').pow(2),
    expected: '294.19186618058544503262528979138900112248137361',
  },
]

const inputs = [
  { name: 'bignumber.js', reference: require('bignumber.js') },
  { name: 'big.js', reference: require('big.js') },
  { name: 'decimal.js-light', reference: require('decimal.js-light') },
  { name: 'decimal.js', reference: require('decimal.js') },
]

exports.default = { samples, inputs }
