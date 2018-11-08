var nums = [1,20,300,6000]
var numsDivisibleBy3 = nums.filter(function(num){
    return num % 3 === 0;
})
console.log(numsDivisibleBy3);
