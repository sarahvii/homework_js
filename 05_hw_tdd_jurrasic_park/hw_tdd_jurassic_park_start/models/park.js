const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}

Park.prototype.numberOfDinosaurs = function () {
    return this.dinosaurCollection.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
    const indexOfDinosaur = this.dinosaurCollection.indexOf(this.dinosaur);
    this.dinosaurCollection.splice(indexOfDinosaur, 0);
}


module.exports = Park;