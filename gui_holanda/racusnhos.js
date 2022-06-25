function chunkArrayInGroups(arr, size) {
  const firstArray = [];
  let parts = arr.length / size;
  for (let i = 0; i < parts; i++) {
    firstArray.push(arr.splice(0, size))
  }
  return firstArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));