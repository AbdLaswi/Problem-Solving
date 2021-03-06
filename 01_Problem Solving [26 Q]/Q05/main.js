console.log("Problem Solving Q: 5 ");

/* Find Intersection */

/*  
Have the function FindIntersection(strArr)
read the array of strings stored in 
strArr which will contain 2 elements:
the first element will represent a list 
of comma-separated numbers sorted in ascending order,
the second element will represent a second list of 
comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing
the numbers that occur in elements of strArr in sorted order.
If there is no intersection, return the string false.
*/

function findIntersection(strArr) {
  // YOUR CODE HERE
  let Arr = [];
  let arr1 = strArr[0].split(",");
  let arr2 = strArr[1].split(",");
  for (let i = 0; i < arr2.length; i++) {
    arr = arr1.filter((num) => num === arr2[i]);
    if (arr.length !== 0) {
      Arr.push(arr[0]);
    }
  }
  return Arr;
}
/* 
Examples:
findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/
