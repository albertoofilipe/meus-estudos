function countMatches(numbers: number[], target: number): number {
  let count = 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      count++
    }
  }

  return count
}

console.log(countMatches([10, 40, 35, 20, 30, 20], 20)) // O(n)
