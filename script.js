var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; 
var myFunc = function (letter) { 
for (var x = 0; x < letter.length; x++) { 
if (letter[x].charAt(0) == 'j' || letter[x].charAt(0)=='J') { 
console.log("Goodbye " + names[x]); 
} 
if (letter[x].charAt(0) != 'j' && letter[x].charAt(0)!='J') {
console.log("Hello " + names[x]); }
 } 
 } 

myFunc(names);