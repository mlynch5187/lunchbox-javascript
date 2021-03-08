class Lunchbox  {
  constructor(obj) {
    obj = obj || {};
    this.owner = obj.owner
    this.material = obj.madeOf;
  }
}

module.exports = Lunchbox;
