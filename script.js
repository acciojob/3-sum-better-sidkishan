function threeSum(arr, target) {
	arr.sort((a, b) => a - b);
	var ans = Infinity;
  for(let i = 0; i < arr.length - 2; i++){
	  let p = i + 1, q = arr.length - 1;
	  while(p < q){
		  let temp = arr[p]+ arr[q] + arr[i]
		  let diff = Math.max(ans, target) - Math.min(ans, target)
		  let currDiff = Math.max(temp, target) - Math.min(temp, target)
		  if(currDiff < diff){
			  ans = temp;
		  }
		  if(temp > target){
			  q--
			  }
		  else p++
	  }
  }
	return ans
}

module.exports = threeSum;
