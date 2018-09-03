const _ = require('lodash')
const Benchmark = require('benchmark')

const groupCases = _(require('./cases').default)
  .flatMap(currentCase => (
    currentCase.samples.map(sample => ({
      libraryName: currentCase.libraryName,
      sample,
    }))
  ))
  .groupBy('sample.name')
  .values()
  .value()

groupCases.map((cases) => {
  return cases
    .reduce(
      (suite, { libraryName, sample }) => (
        suite.add(`${libraryName}: ${sample.name}`, () => {
          if (!sample.run().eq(sample.expected)) {
            throw new Error()
          }
        })
      ),
      new Benchmark.Suite(),
    )
    .on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').map('name'))
    })
    .run({ async: true })
})
