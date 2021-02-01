
// factorial from a number
// way 1

const factorial1 = number => {
    let product = 1;
    for (let i = 2; i <= number; i++) {
      product *= i;
    }
    return product;
  };

  // way 2: recursive
const factorial2 = number => {
    return number < 2 ? 1 : number * factorial2(number - 1);
  };

  console.log("way1", factorial1(5))
  console.log("way2", factorial2(5))

  // create native method repitify
  String.prototype.repeatify = String.prototype.repeatify || function(times) {
    let str = '';
    for (let i = 0; i < times; i++) {
       str += ' ' + this;
    }
    return str;
 };


 // apply native method
 console.log('hello'.repeatify(3));

 // creating native method to detect if palindrome
 String.prototype.palindrome = String.prototype.palindrome || function() {
    let str = this.toLowerCase()
    return  str === str.split('').reverse().join('')
 };

  console.log('racecar'.palindrome());

  console.log('table'.palindrome());
  

  // Confeccionar una clase persona que permita almacenar el nombre y la edad. Luego definir un vector de 4 componentes de tipo persona. 
  // Imprimir el nombre de la persona de mayor edad; decir también si hay más de una persona con la edad mayor.

  class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

  let vector=new Array(4);
  vector[0]=new Persona('juan',44);
  vector[1]=new Persona('ana',22);
  vector[2]=new Persona('pedro',43);
  vector[3]=new Persona('marcos',18);

// algoritmo de ordenacion de arreglos
const quickSort = ( [ x = [], ...xs ] ) => {
    return ( x.length === 0 ) ? [] : [
      ...quickSort( xs.filter( y => y <= x ) ),
      x,
      ...quickSort( xs.filter( y => y.age > x.age ) )
    ];
  }

elements = quickSort(vector)
console.log(elements[vector.length-1]);



  
  