const cases = require('./cases').default

cases.map(currentCase => {
  describe(currentCase.libraryName, () => {
    currentCase.samples.map(sample => {
      test(sample.name, () => {
        expect(sample.run().toString()).toBe(sample.expected)
      })
    })
  })
})
