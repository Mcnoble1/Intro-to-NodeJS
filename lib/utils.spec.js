const { getNewUser, mapObjectToArray } = require('./utils')

describe('mapObjectToArray()', () => {
    test('map values to array using callback', () => {
        const results = mapObjectToArray({age: 30, height: 65}, (k, v) => {
            return v + 10
        })
        expect(results).toEqual([40, 75])
    })
})