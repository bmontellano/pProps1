//Testing the new alias 

//New Keyword

var Animal = function(color, name, type) {
    //this = {}
    this.color = color;
    this.name = name;
    this.type = type;
}

var kitty = new Animal('Orange', 'Forest','Cat');

console.log("This is the kitty ---> ",kitty);

//Window binding
//using strict mode will not let you bind this to the window object
var sayBirthday = function(){
    'use strict';
    console.log(this.birthday);
};

var me = {
    birthday : '02/18/1987'
};

//The window object only exists in a browser
//Running this code in VS code will yield Reference Error
window.birthday = '02/18/1987'
sayBirthday();