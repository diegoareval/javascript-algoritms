// algoritmo de ordenacion de arreglos
const quickSort = ( [ x = [], ...xs ] ) => {
    return ( x.length === 0 ) ? [] : [
      ...quickSort( xs.filter( y => y <= x ) ),
      x,
      ...quickSort( xs.filter( y => y > x ) )
    ];
  }
  
  const values = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result = quickSort(values);
  console.log(result);

// factorial from a number
// way 1

const factorial1 = number => {
    let product = 1;
    for (let i = 2; i <= number; i++) {
      product *= i;
    }
    return product;
  };

const factorial2 = number => {
    return number < 2 ? 1 : number * factorial2(number - 1);
  };

  console.log("way1", factorial1(5))
  console.log("way2", factorial2(5))
  