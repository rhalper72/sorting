function split(arr){
	var indexR = Math.floor(arr.length/2)

	return [arr.slice(0,indexR), arr.slice(indexR)]
}

function merge(arr1,arr2){
	var sorted = [];
	while(arr1.length && arr2.length){
		if(arr1[0] < arr2[0]){
			sorted.push(arr1[0])
			arr1 = arr1.slice(1)
		} else {
			sorted.push(arr2[0])
			arr2 = arr2.slice(1)
		}
	}
	if(arr1.length){
		return sorted.concat(arr1)
	} else {
		return sorted.concat(arr2)
	}
}

function mergeSort(array){
	if(array.length ===1){
		return array;
	} else {
		var splitted = split(array)
		return merge(mergeSort(splitted[0]),mergeSort(splitted[1]))
	}
}