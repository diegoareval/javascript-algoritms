console.log("proxy");
class Carro {
  drive() {
    return "CONDUCIENDO....";
  }

  driveRestriction() {
    return "DEMASIADO JOVEN PARA CONDUCIR";
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
  }
  drive() {
    const car = new Carro();
    return this.driver.age < 18 ? car.driveRestriction() : car.drive();
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

const car = new CarProxy(new Driver(17));
console.log(car.drive());
