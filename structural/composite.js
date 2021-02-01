console.log("composite");

class Employe {
    getSalary(){
    return this.salary | 0;
    }

    getName(){
      return this.getName;
    }

    setName(name){
       this.name = name;
    }
}

class Composite extends Employe {
    constructor(){
      super();
          this.employes = [];
    }

    add(employe){
        this.employes.push(employe)
    }
    getSalary(){
        return this.employes.map((employe)=> {
            return employe.getSalary();
        }).reduce((a, b)=> {
            return a+b;
        });
    }
}

class Manager extends Composite {
    constructor() {
      super();
      this.setName('Bussines Manager');
    }
  }
  
  // --- leafs ---
class Auxiliar extends Employe {
    constructor() {
      super();
      this.setName('Auxiliar');
      this.salary = 70;
    }
  }
  
  class Counter extends Employe {
    constructor() {
      super();
      this.setName('Counter');
      this.salary = 250;
    }
  }
  
  class Inversor extends Employe {
    constructor() {
      super();
      this.setName('inversor');
      this.salary = 280;
    }
  }

  // objects
  const auxiliar = new Auxiliar();
  const auxiliar2 = new Auxiliar();
  const counter = new Counter();
  const composite = new Composite();
  composite.add(auxiliar);
  composite.add(auxiliar2);
  composite.add(counter);
  console.log(composite.getSalary());