function binarySearch(arr, target) {
  // type your code here
  if(arr.length < 1){
    return false
  }

  let middle = Math.floor(arr.length / 2)
  let middleValue = arr[middle]

  if(middleValue === target){
    return true
  }

  if(middleValue > target){
    return binarySearch(arr.slice(0, middle), target)
  } else {
    return binarySearch(arr.slice(middle + 1), target)
  }

}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
// function binarySearchIndex(arr, target) {
//   if(arr.length < 1){
//     return -1
//   }

//   let middle = Math.floor(arr.length / 2)
//   let middleValue = arr[middle]

//   console.log("arr: ", arr)
//   console.log("middle: ", middle)

//   if(middleValue === target){
//     return middle
//   }

//   if(middleValue > target){
//     return binarySearchIndex(arr.slice(0, middle), target)
//   } else {
//     const index = binarySearchIndex(arr.slice(middle + 1), target)
//     console.log("index: ", index)
//     if(index === -1){
//       return -1
//     }

//     return index + middle + 1
//   }

// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", binarySearch([1, 2, 3], 3));

  console.log("Expecting: false");
  console.log("=>", binarySearch([], 3));

  console.log("Expecting: false");
  console.log("=>", binarySearch([3, 5, 9], 10));

  console.log("Expecting: true");
  console.log("=>", binarySearch([7, 24, 86, 107], 86));

  // UNCOMMENT FOR BONUS
  // console.log("");
  // console.log("Expecting: 0");
  // console.log("=>", binarySearchIndex([1, 2, 3], 1));

  // console.log("");
  // console.log("Expecting: -1")
  // console.log("=>", binarySearchIndex([]))

  // console.log("Expecting: -1");
  // console.log("=>", binarySearchIndex([4, 7, 20], 100));

  // console.log("Expecting: 2");
  // console.log("=>", binarySearchIndex([7, 24, 86, 107], 86));

  // console.log("Expecting: 3");
  // console.log("=>", binarySearchIndex([7, 24, 86, 107], 107));

  // console.log("Expecting: 7");
  // console.log("=>", binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8], 8));

}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
