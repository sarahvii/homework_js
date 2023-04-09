const PaintCan = function (colour, litres) {
    this.colour = colour;
    this.litres = litres;
}

PaintCan.prototype.checkEmpty = function () {
    return this.litres === 0;
}

PaintCan.prototype.emptyCan = function () {

    return this.litres = 0;
}


module.exports = PaintCan