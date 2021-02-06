console.log("factory");
class BmwFactory {
  create(type) {
    if (type === "X5") return new Bmw(type, 108000, 300);
    if (type === "X6") return new Bmw(type, 111000, 320);
    if (type === "X7") return new Tractor(type, 1566000, 350);
  }
}

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class Tractor {
    constructor(model, price, maxSpeed) {
      this.model = model;
      this.price = price;
      this.maxSpeed = maxSpeed;
    }
  }



console.log(new BmwFactory().create("X7"));
