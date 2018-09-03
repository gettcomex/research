const libraries = [
  { name: 'bignumber.js', reference: require('bignumber.js') },
  { name: 'big.js', reference: require('big.js') },
  { name: 'decimal.js-light', reference: require('decimal.js-light') },
  { name: 'decimal.js', reference: require('decimal.js') },
]

const cases = libraries.map(library => {
  return {
    'libraryName': library.name,
    'samples': [{
      'name': `('0.1').plus('0.2').eq('0.3')`,
      'run': () => library.reference('0.1').plus('0.2'),
      'expected': '0.3'
    }, {
      'name': `('4.1414999961853027').pow(2).eq('17.15202221840286227865191549062729')`,
      'run': () => library.reference('4.1414999961853027').pow(2),
      'expected': '17.15202221840286227865191549062729'
    }, {
      'name': `('17.1520222184028622786519').pow(2).eq('294.19186618058544503262528979138900112248137361')`,
      'run': () => library.reference('17.1520222184028622786519').pow(2),
      'expected': '294.19186618058544503262528979138900112248137361'
    }]
  }
})

exports.default = cases
