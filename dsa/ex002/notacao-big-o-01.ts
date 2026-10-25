function findElement<T>(items: T[], target: T): number {

  for (let i = 0; i < items.length; i++) {
    if (items[i] === target) {
      return i
    }
  }

  return -1
}

console.log(findElement([10, 40, 35, 20, 30, 20], 20)) // O(n)