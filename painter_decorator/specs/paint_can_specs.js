const assert = require('assert');
const PaintCan = require('../models/paint_can.js')


describe('Paint Can', function () {
    let paintCan1;
    let paintCan2;

    beforeEach(function () {
        paintCan1 = new PaintCan('Red', 5);
        paintCan2 = new PaintCan('Blue', 0);
    });

    it('should have a colour', function () {
        const actual = paintCan1.colour;
        assert.strictEqual(actual, 'Red');

    });

    it('should have a number of liters of paint', function () {
        const actual = paintCan1.litres;
        assert.strictEqual(actual, 5);
    });

    it('should be able to check if a paint can is empty', function () {
        const actual1 = paintCan1.checkEmpty();
        const actual2 = paintCan2.checkEmpty();
        assert.strictEqual(actual1, false);
        assert.strictEqual(actual2, true);
    });

    it('should be able to empty itself of paint', function () {
        paintCan1.emptyCan();
        const actual = paintCan1.checkEmpty();
        assert.strictEqual(actual, true);
    });
});