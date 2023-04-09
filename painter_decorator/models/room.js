const Room = function (area) {
    this.area = area;
    this.isPainted = false;
}

Room.prototype.isPainted = function () {
    this.isPainted = true;
}

Room.prototype.paintRoom = function () {
    return this.isPainted = true;
}

module.exports = Room;