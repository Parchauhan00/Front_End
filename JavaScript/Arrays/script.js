const nums = [4,1,2,8,2,8,6]

console.log(nums.indexOf(8))  // if element is not present it will return -1
console.log(nums.includes(80))  // will return true and false

nums.push("prashant")   // push element in last index in array
console.log(nums)
nums.unshift("duldul")  // insort in starting index
console.log(nums)
nums.pop() // to remove element from last index

nums.shift() // remove first element

nums.sort() //used to sort the array

const subarray = nums.slice(2,5);  // used to create new subb array from array
console.log(subarray)



