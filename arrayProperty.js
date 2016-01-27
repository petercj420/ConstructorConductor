//Just like you can add methods to your own constructor, you can also add methods and 
//properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call 
//reverse and reverse itself.

  //code here
console.log("this");
String.prototype.reverse = function(){
	console.log(this);
	var y = this.split("").reverse().join("");
	return y;
}

var x = "asdfjsldkfj";

x.reverse;
console.log("this");
console.log(x);