function threeSum(arr, target) {
	arr.sort((a, b) => a - b);
	var ans = Infinity;
  for(let i = 0; i < arr.length - 2; i++){
	  let newTarget = target - arr[i];
	  let p = i + 1, q = arr.length - 1;
	  while(p < q){
		  let temp = arr[p]+ arr[q]
		  let diff = Math.max(ans, newTarget) - Math.min(ans, newTarget)
		  let currDiff = Math.max(temp, newTarget) - Math.min(temp, newTarget)
		  if(currDiff <diff){
			  ans = arr[i] + temp;
		  }
		  if(temp > newTarget){
			  q--
			  }
		  else p++
	  }
  }
	return ans
}

module.exports = threeSum;
