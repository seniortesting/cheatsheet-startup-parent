const sum = require('../../src/Sum')
const {assert, expect} = require('chai')
describe('demo1-test suite', function () {
    before('before hook', function () {
        console.log('before all in demo1')
    })
    beforeEach('beforeEach hook', function () {
        console.log('beforeEach in demo1')
    })
    after('after hook', () => {

    })

    describe('demo1-testsuite1', function () {
        it('test suite 2, 1+1=2', () => {
            console.log('test suite 2, 1+1')
        })
    })

    it('test 1+1=2', function () {
        const result = sum(1, 1)
        expect(result).to.be.equal(2, 'sum verification')
    })

    it.skip('test 2+2=4', function () {
        console.log('test 2+2')
        assert.equal(sum(2, 2), 4, 'assert validation')
    })


})