class Lunchbox  {
  constructor(obj) {
    obj = obj || {};
    this.owner = obj.owner
    this.material = obj.madeOf;
    this.shape = obj.shape;
    this.color = obj.color;
    this.snacks = [];
  }

  acquireSnack(snack)  {
    this.snacks.push(snack)
    snack.isInLunchBox = true;
  }
}

module.exports = Lunchbox;
