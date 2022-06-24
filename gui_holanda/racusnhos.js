// function frankenSplice(arr1, arr2, n) {
//   const newArray = [];
//   let remaining = 0;
//   for (let i = 0; i < n; i++) {
//     newArray[i] = arr2[i];
//   }
//   for (let index in arr1) {
//     newArray[n] = arr1[index];
//     n++
//   }
//   remaining = arr2.length - n + arr1.length;
//   for (let j = remaining; j < arr2.length; j++){
//     newArray[j + arr1.length] = arr2[j]
//   }
//   return newArray;
// }

function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice();
  for (let index in arr1) {
    newArray.splice(n, 0, arr1[index])
  }
  return arr2;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
