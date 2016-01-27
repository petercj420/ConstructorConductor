//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of 
//user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good 
//constructors. 

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
var QuizUser = function(name, email, password, totalScore){
	var obj = {
	name: name,
	email: email,
	password: password,
	totalScore: totalScore}
	return obj;

}

//Create a Question constructor that accepts title, answersArray, rightAnswer, 
//and difficulty parameters

  //code here

var Question = function(title, answersArray, rightAnswer, difficulty){
	var obj = {
	title: title,
	answersArray: answersArray,
	rightAnswer: rightAnswer,
	difficulty: difficulty}
	return obj;

}

//Create a quizUsers Array which is going to hold all of our users.

  //code here
  quizUsers = [];
  questions = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to 
//the users Array

  //code here
var user1 = new QuizUser("pete", "petetjensen@gmail.com", "iliketurtles", 98);
var user2 = new QuizUser("dale", "gaba@gmail.com", "poop", 78);
var user3 = new QuizUser("sarah", "dookie@gmail.com", "lifeismeaningless", 88);
//Create a questions Array which is going to hold all of our questions
quizUsers.push(user1);
quizUsers.push(user2);
quizUsers.push(user3);
  //code here


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of 
//Question 
//which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - 
//where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here
var question1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?',['T','F'], 'F', 3);
var question2 = new Question('T/F: JavaScript is just a scripting version of Java',['T','F'], 'T', 5);
var question3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value",['T','F'], 'T', 5);
//Now push all of your instances of Question into the questions Array
questions.push(question1);

questions.push(question2);

questions.push(question3);
  //code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
for (var x = 0; x < quizUsers.length; x++){
	for(val in quizUsers){
		console.log(val);
	}
}
for (var x = 0; x < questions.length; x++){
	for(val in questions){
		console.log(val);
	}
}

