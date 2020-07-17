function map(arr, callback) {
	let newArray = [];

	for (let i = 0; i < arr.length; i++) {
		newArray[i] = callback(arr[i]);
	}
	return newArray;
}


let array = [2, 3, 4, 5]

let result =map(array, function(item) {
	return item * 5;
})

console.log('Array: ', array)
console.log('Result: ', result);

module.exports = { map };