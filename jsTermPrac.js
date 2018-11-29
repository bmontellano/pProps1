var nums = [1,20,300,6000]
var numsDivisibleBy3 = nums.filter(function(num){
    if(num % 3 === 0){return num};
})
console.log(numsDivisibleBy3);
