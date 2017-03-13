$(document).ready(function(){

// write a method names()
// which takes a string of
// comma-separated names
// (first and last) and then
// returns an object where each
// firstname is a key, and each
// lastname is a value
//
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function names(var) { 
	var obj = {}

	var names = str.split(", ") //[George Washington, John Adams, Kanye West"]
	names.forEach(function(name){
		var firstName = name.split(" ")[0] // ["george",]
		var lastName = name.split(" ")[1] // [" washington"]
		obj[firstName] = lastName
	})
return obj 

}

var results = names("George Washington, John Adams, Kanye West")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")

})

/*
  Create a function that will take a string and return that string with alternating case.
  
  For example: 
  "I type like a 90's hacker!" -> "i tYpE LiKe a 90'S HaCkEr!"
*/

function altCaps (str) {
	var testThis = str.toLowercase().split("");
	for (var i = 1; i < testThis.length; i += 2) {
		testThis[i] = testThis[i].toUpperCase();
	}
	return testThis.join("")
}

console.assert(altCaps("I type like a 90's hacker!") === "i tYpE LiKe a 90'S HaCkEr!");
console.assert(altCaps("Typing in alternatig caps is immature.") === "tYpInG In aLtErNaTiG CaPs iS ImMaTuRe.");