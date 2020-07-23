console.log('********************* Muatating Methods of Array **********************');

console.log('Adding Elements to Array push() and unshift()');
//1.The mutating methods for adding element to an array are array.push() and array.unshift().
let mutatingAdd = ['a', 'b', 'c', 'd', 'e']; 

console.log(mutatingAdd);

mutatingAdd.push('f'); // ['a', 'b', 'c', 'd', 'e', 'f']  //adds element in last of array
mutatingAdd.unshift('z'); // ['z', 'a', 'b', 'c', 'd', 'e' 'f']  //adds element in front of array
console.log(mutatingAdd);



console.log('Removing Elements from Array pop() and shift()');
//2.The mutating methods for removing from an array are array.pop() and array.shift().
let mutatingRemove = ['a', 'b', 'c', 'd', 'e'];
console.log(mutatingRemove);
let removed1=mutatingRemove.pop(); // ['a', 'b', 'c', 'd']   //array.pop() removes an item at the end of the array
let removed2=mutatingRemove.shift(); // ['b', 'c', 'd']   //array.shift() removes an item at the beginning of the array.
console.log(mutatingRemove);
//array.pop() and array.shift() return the item that is removed. This means you can 'catch' the deleted item in a variable.
console.log(`Removed item1= ${removed1} and item2= ${removed2}`);





console.log('Replacing Element in Array splice(index,newElement)');
//3.array.splice() to replace element it with something else.
// 1.The first parameter is the index to start replacing.
// 2.The second parameter is the number of items to remove.
// 3.The third and all other parameters are what will be inserted into the array.
let mutatingReplace = ['a', 'b', 'c', 'd', 'e'];
console.log(mutatingReplace);
mutatingReplace.splice(2, 1, 30); // ['a', 'b', 30, 'd', 'e']
//(mutatingReplace.splice(2, 1, 30)) replaces 'c' with 30
console.log(mutatingReplace);



//4. array.sort() to sort the array
console.log('Sorting an Array sort(callbackFunction(a,b))');
let mutatingSort=[5,9,4,7,3,1,5,8]
console.log(mutatingSort);
console.log('Sort Ascending');
mutatingSort.sort()
console.log(mutatingSort);

console.log('Sort Descending');
mutatingSort.sort((a,b)=>b-a)
console.log(mutatingSort);


//5.array.reverse() reverse the array
console.log('Reversing an Array reverse()');
let mutatingReversed=[5,9,4,7,3,1,5,8]
console.log(mutatingReversed);
mutatingReversed.reverse();
console.log(mutatingReversed);
