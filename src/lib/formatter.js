export let formatNumber = (num, sigfigs = 3) => {
	let formatNotation = [
		"",
		"K",
		"M",
		"B",
		"T",
		"Q",
	  ]
	
	  if(!num) {
		return 0;
	  }
	  if(num == 0) {
		return 0;
	  }
	
	  let nums = []
	  let numCopy = num;
	
	  let run = true;
	  while (run) {
		nums.push(numCopy%10)
		numCopy = Math.floor(numCopy/10)
		if(numCopy < 10) {
		  run = false;
		  nums.push(numCopy)
		}
	  }
	  
	  let wholedigits = 0;
	  let formatIndex = Math.floor((nums.length - 1)/3)
	  wholedigits = (nums.length - 1)%3;
	
	
	  let placedDigits = 0;
	  let final = ""
	  for(let i = nums.length -1; i > nums.length - sigfigs - 1; i--) {
		final+=nums[i];
		if(wholedigits == placedDigits && placedDigits != sigfigs -1) {
		  final+="."
		}
		placedDigits += 1;
		
	  }
	  final += formatNotation[formatIndex]
	  console.log(final)
	
	  return final;
	

	
}