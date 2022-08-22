
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers)

let numbersDecrescent = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = numbersDecrescent.length - 2; index >= 0; index -= 1) {
  for (let secondIndex = numbersDecrescent.length - 1; secondIndex > index; secondIndex -= 1) {
    if (numbersDecrescent[index] < numbersDecrescent[secondIndex]) {
      let position = numbersDecrescent[index];
      numbersDecrescent[index] = numbersDecrescent[secondIndex];
      numbersDecrescent[secondIndex] = position;
    }
  }
}

console.log(numbersDecrescent)

let numbersNonOrdened = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersMult = [];
for(let index = 0; index < numbersNonOrdened.length; index += 1) {
  if(numbersNonOrdened[index + 1] !== undefined) {
    numbersMult.push(numbersNonOrdened[index] * numbersNonOrdened[index + 1])
  } else {
    numbersMult.push(numbersNonOrdened[index] * 2)
  }
}

console.log(numbersMult)