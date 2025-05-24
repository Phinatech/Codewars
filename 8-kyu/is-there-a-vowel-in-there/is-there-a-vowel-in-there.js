function isVow(a){
 // your code here
    const vowelCodes = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u'
  };
​
  return a.map(num => vowelCodes[num] || num);
}