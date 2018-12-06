 
//Explicit Binding
//NOTE: press cmd +shift + p and run 'Run Code' to see the console.log

//.call() method
 var sayNameAge =  function(){
 console.log('My name is ' + this.name + ' and I am ' + this.age +' years old.');
};

var elias = {
    name: 'Elias',
    age: 31
};

console.log('BELOW WILL BE THE CALL');
sayNameAge.call(elias);

//.apply() method
var singSaySomething = function (say1, say2, say3, say4, say5){
    console.log("I'm " + this.name + " and I'm singing: " + say1 + say2 + say3 + say4 + say5);
};

var brian = {
    name: 'Brian'
};

var saySomethingSong = ['Say ', 'something ', 'Im never ', 'giving up', ' on javascript.'];

console.log('BELOW WILL BE THE APPLY');
singSaySomething.apply(brian, saySomethingSong);

//.bind() method
//This method will create a new function and bind the parameters passed to the original function
//The new function can be later invoked

var crazyFun = function(crazy1, crazy2){
    console.log("My name is " + this.name + " and these are the crazy things I do:" +"\n"+"1. " + crazy1 + "\n" + "2. " + crazy2)
}

var bb = {
    name: 'BB'
};

crazies = ['Eat worms for breakfast', 'Drink battery acid for fuel']

var newCrazy = crazyFun.bind(bb, crazies[0], crazies[1]);
console.log('BELOW WILL BE THE BIND');
newCrazy();
