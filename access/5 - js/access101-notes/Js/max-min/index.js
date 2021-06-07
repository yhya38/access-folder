
const arr = [20, -3, -15, -20, 3, 15, 40];

const arrayMinMax = (arr) => {
  let min = arr[0], max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    min = (value < min) ? value : min;
    max = (value > max) ? value : max;
  }

  return [min, max];
};

console.log(arrayMinMax(arr)) //Prints: [-20, 40]
