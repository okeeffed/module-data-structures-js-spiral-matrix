const lib = require('./index');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;

describe('spiral matrix', function () {
    it('should return correct for 2', function () {
        let target = [
            [
                1, 2
            ],
            [4, 3]
        ];
        const res = lib.matrix(2);

        expect(res)
            .to
            .deep
            .equal(target);
    });

    it('should return correct for 3', function () {
        let target = [
            [
                1, 2, 3
            ],
            [
                8, 9, 4
            ],
            [7, 6, 5]
        ];
        const res = lib.matrix(3);

        expect(res)
            .to
            .deep
            .equal(target);
    });

    it('should return correct for 0', function () {
        let target = [];
        const res = lib.matrix(0);

        expect(res)
            .to
            .deep
            .equal(target);
    });
});