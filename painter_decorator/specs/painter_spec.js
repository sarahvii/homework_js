const assert = require('assert');
const Painter = require('../models/painter.js')
const PaintCan = require('../models/paint_can.js')
const Room = require('../models/room.js')

describe('Painter', function () {
    let painter1;
    let painter2;
    let paintCan;
    let room;

    beforeEach(function () {
        painter1 = new Painter('name');
        painter2 = new Painter('name');
        paintCan = new PaintCan('Red', 5);
        room = new Room(100);
    });

    it('should have an empty paint stock list', function () {
        const actual = painter1.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a can of paint to paint stock', function () {
        painter1.addPaintCan(paintCan);
        const actual = painter1.stock;
        assert.deepStrictEqual(actual, [paintCan])
    });

    // it('should be able to calculate whether it has enough paint to paint a room');
    //     painter1.stockGreaterThanRoom(room);
    //     const actual = painter1.stockGreaterThanRoom(room);
    //     assert.strictEqual(actual, true)

    // xit('should be able to paint a room if it has enough paint in stock')

});

// describe('Paint Can', function () {
//     let paintCan1;
//     let paintCan2;

//     beforeEach(function () {
//         paintCan1 = new PaintCan('Red', 5);
//         paintCan2 = new PaintCan('Blue', 0);
//     });

//     it('should have a colour', function () {
//         const actual = paintCan1.colour;
//         assert.strictEqual(actual, 'Red');

//     });

//     it('should have a number of liters of paint', function () {
//         const actual = paintCan1.litres;
//         assert.strictEqual(actual, 5);
//     });

//     it('should be able to check if a paint can is empty', function () {
//         const actual1 = paintCan1.checkEmpty();
//         const actual2 = paintCan2.checkEmpty();
//         assert.strictEqual(actual1, false);
//         assert.strictEqual(actual2, true);
//     });

//     it('should be able to empty itself of paint', function () {
//         paintCan1.emptyCan();
//         const actual = paintCan1.checkEmpty();
//         assert.strictEqual(actual, true);
//     });
// });

// const assert = require('assert');
// const Room = require('../models/room.js')

// describe('Room', function () {
//     let room1;
//     let room2;

//     beforeEach(function () {
//         room1 = new Room(100);
//         room2 = new Room(50);
//     });

//     it('should have an area in square meters', function () {
//         const actual = room1.area;
//         assert.strictEqual(actual, 100);
//     })

//     it('should start not painted', function () {
//         const actual = room1.isPainted;
//         assert.strictEqual(actual, false);
//     });

//     it('should be able to be painted', function () {
//         const actual = room1.paintRoom();
//         assert.strictEqual(actual, true);
//     })
// })