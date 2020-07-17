function filter(arr, callback) {
	let count = 0;
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			newArray[count] = arr[i];
			count++;
		}
	}
	return newArray;
}

let array = [2, 3, 4, 5, 6, 8, 9];

let result =filter(array, function(item) {
	if (item > 5) {
		return true;
	}  
})

console.log('array: ', array)
console.log('result: ', result);

module.exports = { filter }