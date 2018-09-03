const _ = require('lodash')
const BenchTable = require('benchtable')

const { samples, inputs } = require('./cases').default

const bench = new BenchTable()

for (const input of inputs) {
  bench.addFunction(input.name, (sample) => {
    if (!sample.run(input).eq(sample.expected)) {
      throw new Error()
    }
  })
}

for (const sample of samples) {
  bench.addInput(sample.name, [sample])
}

bench
  .on('complete', function() {
    console.log(bench.table.toString())
  })
  .run({ async: true })
