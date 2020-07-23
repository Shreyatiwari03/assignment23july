console.log('********************* Non Muatating Methods of Array **********************');

console.log('Adding Elements to Array concat()');
//1.The Non mutating method for adding element to an array array.concat() at end
const arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1);
const arr2 = arr1.concat('f'); // ['a', 'b', 'c', 'd', 'e'. 'f']
console.log(arr2);

console.log('Filtering Elements from Array filter(callbackfunction(a))');
//2.JavaScript's array.filter() method creates a new array from an original array, but the new array only contains items that match the specified criteria.
const arr3 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr3);
const arr4 = arr3.filter(a => a !== 'e'); // ['a', 'b', 'c', 'd']
console.log(arr4);

//remove items from an array in a non-mutating manner is through the use of array.slice()
console.log('Removing elements from array slice(start,end)');
const arr5 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr5);
const arr6 = arr5.slice(1, 4) // ['b', 'c', 'd', 'e']
console.log(arr6);
const arr7 = arr5.slice(2) // ['c', 'd', 'e']
console.log(arr7);