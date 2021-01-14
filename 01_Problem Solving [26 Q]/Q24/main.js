console.log("Problem Solving Q:24 ");

/* bubbleSort */

/*  
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:
  • If the first element is greater than the second element, it swaps the two.
  • It then compares the second to the third, and the third to the fourth, and so on.
    - In this way, the largest values 'bubble' to the end of the array.
  • Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
*/
const swapNumber = (array, firstValue, secValue) => {
  let swapValue = array[firstValue];
  array[firstValue] = array[secValue];
  array[secValue] = swapValue;
};

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swapNumber(array, j - 1, j);
      }
    }
  }
  return array;
}

/* 
Examples:
bubbleSort() // =>
bubbleSort() // =>
bubbleSort() // =>
*/
