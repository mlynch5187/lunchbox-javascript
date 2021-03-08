class Snack {
  constructor(type) {
    this.type = type;
    this.deliciousLevel = 'extra';
    this.amount = 100;
    this.isInLunchBox = false;
  }

  getEaten()  {
    this.amount -= 10;
  }
}

module.exports = Snack;
