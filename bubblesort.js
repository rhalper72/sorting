function bubbleSort(arr){
	for (var i = 0; i < arr.length-1; i++) {
		for (var j = 0; j < arr.length-i-1; j++) {
			if(arr[i]>arr[i+1]){
				var swapArr = swap(arr[i],arr[i+1])
				arr[i] = swapArr[0];
				arr[i+1] = swapArr[1];
			}
		}
	}
	return arr;
}

function swap(el1, el2){
	return [el2,el1];
}