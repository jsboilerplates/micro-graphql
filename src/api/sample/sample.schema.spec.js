import sampleSchema from './sample.schema'

describe('SampleSchema tests', () => {
  it('It should be not null', () => {
    let actual = sampleSchema
    expect(actual).not.toBeNull()
    expect(actual.name).not.toBeNull()
    expect(actual.getFields().name).not.toBeNull()
    expect(actual.getFields().id).not.toBeNull()
  })
})
