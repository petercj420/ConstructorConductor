/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  var users = [];


//Now create and push into your users array 3 separate instances of User using the data from 
//above in that exact order 
var tyler = new User( "Tyler", "tylermcginnis33@gmail.com", 'iLoveJS');
users.push(tyler);
var calahan = new User( "Cahlan", "cahlan@devmounta.in", 'iLoveHashtags');
users.push(calahan);
var lenny = new User( "Lenny", "lenny@theLenster.com", 'iLoveLentilSoup');
users.push(lenny);


console.log('Tyler\'s information is ');
//Console.log all of Tylers information

console.log(users.tyler)
  //code here

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here
console.log(users.lenny)

//Now create another instance of User using your own information and then add that to your users array.
var me = new User( "peter", "petet@memes.com", 'smokeweederryday420');
users.push(me);
  //code here

console.log('All my users names are ');
for(var x = 0; x < users.length; x++)
{
  console.log(users[x].name);
}
//Now loop through your users Array and console.log every users name. 

  //code here
