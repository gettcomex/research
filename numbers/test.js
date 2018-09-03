const { samples, inputs } = require('./cases').default

for (const input of inputs) {
  describe(input.name, () => {
    for (const sample of samples) {
      test(sample.name, () => {
        const result = sample.run(input).toString()

        expect(result).toBe(sample.expected)
      })
    }
  })
}
