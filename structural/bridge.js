console.log("bridge");

class Car {
    constructor(oil){
        this.oil = oil;
    }
}

class NissanCar extends Car {
    constructor(oil) {
      super(oil);
    }
  
    features() {
      return "Car: Nissan, Oil: " + this.oil.get();
    }
  }

  class ToyotaCar extends Car {
    constructor(oil) {
      super(oil);
    }
  
    features() {
      return "Car: Toyota, Oil: " + this.oil.get();
    }
  }
  
  class Oil {
    constructor(type) {
      this.type = type;
    }
    get() {
      return this.type;
    }
  }
  
  class RegularOil extends Oil {
    constructor() {
      super("regular");
    }
  }
  
  class SuperOil extends Oil {
    constructor() {
      super("super");
    }
  }
  const regular = new RegularOil()
  const superr = new SuperOil();
  const nissan = new NissanCar(regular)
  const toyota = new ToyotaCar(superr)
  console.log(nissan.features());
  console.log(toyota.features());

