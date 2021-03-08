class Lunchbox  {
  constructor(obj) {
    obj = obj || {};
    this.owner = obj.owner
    this.material = obj.madeOf;
    this.shape = obj.shape;
    this.color = obj.color;
    this.snacks = [];
  }
}

module.exports = Lunchbox;
