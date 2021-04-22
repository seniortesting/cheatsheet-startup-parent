const sum = require('../../src/Sum')
const {assert, expect} = require('chai')
describe('test ratingService', function () {
    before('ratingService Before hook', function () {
        console.log('ratingService before hook')
    })
    beforeEach('ratingService beforeEach hook', function () {
        console.debug('ratingService beforeEach hook')
    })
    after('ratingService after hook', () => {
        console.log('ratingService after hook')
    })

    it('test queryRatingConfig method', function () {
        it('test suite 2, 1+1=2', function () {
            console.log('test suite 2, 1+1')
        })
    })

    it('test 1+1=2 happy path', function () {
        const result = sum(1, 1)
        expect(result).to.be.equal(2, 'sum verification')
    })
    it('test skip this method', function () {
        assert.equal(sum(2, 2), 4, 'assert validation')
    })
})
