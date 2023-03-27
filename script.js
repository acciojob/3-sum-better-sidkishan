function threeSum(arr, target) {

  arr.sort();
	let closestSum = Infinity;
	for(var i = 0; i < arr.length - 2; i++){
		// now apply 2 sum here
		var left = i + 1;
		var right = arr.length - 1;
		while(left < right){
			var sum = arr[i] + arr[left] + arr[right];
			if(Math.abs(target - closestSum) >= Math.abs(sum - closestSum)){
				closestSum = sum;
			}
			if(sum > target){
				right--;
			}
			else{
				left++;
			}
		}
	}
	return closestSum;
}

module.exports = threeSum;
