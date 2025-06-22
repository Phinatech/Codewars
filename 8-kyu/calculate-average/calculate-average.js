function findAverage(arr) {
  // your code here
   if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
  return 0;
}
​
​