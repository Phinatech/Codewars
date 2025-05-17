function countPositivesSumNegatives(input) {
  // your code here
  if (!input || input.length === 0) return [];
​
  let count = 0;
  let sum = 0;
​
  for (let num of input) {
    if (num > 0) count++;
    else if (num < 0) sum += num;
  }
​
  return [count, sum];
}