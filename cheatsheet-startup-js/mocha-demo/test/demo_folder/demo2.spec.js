const {expect} = require('chai')
const sum = require('../../src/Sum')


describe('demo2-test suite1', function () {
    this.retries(4);
    beforeEach(function () {
        console.log('beforeEach in demo2')
    })
    it('should equals 2', function () {

        expect(sum(1, 1)).to.equal(2, 'sum')
    });
});