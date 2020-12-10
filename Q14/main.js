console.log("Problem Solving Q:14 ");

/* ArrayMiddle */

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
  let len = arr.length;
  if (len % 2 === 0) {
    let middle = len / 2;
    let theAverage = arr[middle - 1] + arr[middle];
    return theAverage / 2;
  }
  let middleNum = Math.floor(len / 2);
  return arr[middleNum];
}


/* 
Examples:
ArrayMiddle([2, 3]); // => 2.5
>>>>>>> 130b72bc80b758ad823d733efefcdef36ac14b45
ArrayMiddle([200, 5, 100]); // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
*/
