const assert = require('assert');
const Room = require('../models/room.js')

describe('Room', function () {
    let room1;
    let room2;

    beforeEach(function () {
        room1 = new Room(100);
        room2 = new Room(50);
    });

    it('should have an area in square meters', function () {
        const actual = room1.area;
        assert.strictEqual(actual, 100);
    })

    it('should start not painted', function () {
        const actual = room1.isPainted;
        assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function () {
        const actual = room1.paintRoom();
        assert.strictEqual(actual, true);
    })
})

