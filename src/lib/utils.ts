import type { Gap } from "./types";

export function getRandomNumberInRange(first: number, second: number) {
  if (first > second) [first, second] = [second, first];

  return Math.floor(Math.random() * (second - first + 1)) + first;
}

export function findIndexOfSmallest(array: number[]) {
  if (array.length === 0) return -1;

  return array.reduce(
    (smallestIndex, currentValue, currentIndex, array) =>
      currentValue < array[smallestIndex] ? currentIndex : smallestIndex,
    0
  );
}

export function createArrayOfArrays<T>(length: number): T[][] {
  return Array.from({ length }, () => [] as T[]);
}

export function parseGap(gap: Gap) {
  if (typeof gap !== "object") {
    return { rowGap: gap, columnGap: gap };
  }

  const { row = 0, column = 0 } = gap;
  return { rowGap: row, columnGap: column };
}
