const Painter = function (name) {
    this.name = name;
    this.stock = [];
}

Painter.prototype.addPaintCan = function (paintCan) {
    return this.stock.push(paintCan);
}



// const Room = function (area) {
//     this.area = area;
//     this.isPainted = false;
// }

// Room.prototype.isPainted = function () {
//     this.isPainted = true;
// }

// Room.prototype.paintRoom = function () {
//     return this.isPainted = true;
// }

module.exports = Painter;