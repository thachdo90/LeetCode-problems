const twoSum = require('./twoSum.js')

describe('twoSum', () => {
  it('should return [0,1]', () => {
    expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1])
  })
  it('should return [1,2]', () => {
    expect(twoSum([2,7,11,15], 18)).toStrictEqual([1,2])
  })
})