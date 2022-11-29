// Insertion Sort

function insertionSort(array) {
  const arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([1, 8, 4, 6, 976, 23, 76, 7, 827, 5678, 3, 9]));

//////////////////////////////////////

// Merge Sort

function merge(leftArr, rightArr) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
  }

  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
  }

  return result;
}

function mergeSort(array) {
  const arr = array.slice();

  if (arr.length <= 1) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);

  let leftSide = mergeSort(arr.slice(0, middleIndex));
  let rightSide = mergeSort(arr.slice(middleIndex));

  return merge(leftSide, rightSide);
}

console.log(mergeSort([1, 8, 4, 6, 976, 23, 76, 7, 827, 5678, 3, 9]));
