const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('Jurrasic', 50);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 3000)
    dinosaur = new Dinosaur('stegasaurus', 'veggie', 10)
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.deepStrictEqual(actual, 50);
  });

  describe('dinosaurCollection', function () {
    it('should have a collection of dinosaurs', function () {
      const actual = park.dinosaurCollection;
      assert.deepStrictEqual(actual, [])
    });
  })

      it('should be able to add a dinosaur to its collection', function () {
        park.addDinosaur('Simon');
        const actual = park.numberOfDinosaurs();
        assert.deepStrictEqual(actual, 1);
      });

      it('should be able to remove a dinosaur from its collection', function () {
        park.removeDinosaur('Simon');
        const actual = park.numberOfDinosaurs();
        assert.deepStrictEqual(actual, 0);
      });

      it('should be able to find the dinosaur that attracts the most visitors', function () {

      });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
