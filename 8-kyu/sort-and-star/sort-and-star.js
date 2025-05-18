function twoSort(strings) {
  const sorted = strings.sort();            // Sort alphabetically (case-sensitive)
  const first = sorted[0];                  // Get the first element
  return first.split('').join('***');       // Add '***' between each letter
}
​
// Call the function with a valid array
const result = twoSort(["banana", "Apple", "cherry"]);
console.log(result); 