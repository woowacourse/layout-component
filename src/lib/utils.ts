export function getRandomNumberInRange(first: number, second: number) {
  if (first > second) [first, second] = [second, first];

  return Math.floor(Math.random() * (second - first + 1)) + first;
}

export function findIndexOfSmallest(arr: number[]) {
  if (arr.length === 0) return -1;

  let smallestIndex = 0;
  let smallestValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestValue) {
      smallestValue = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

export function createArrayOfArrays<T>(length: number) {
  const arrayOfArrays: T[][] = [];

  for (let i = 0; i < length; i++) {
    arrayOfArrays.push([]);
  }

  return arrayOfArrays;
}
