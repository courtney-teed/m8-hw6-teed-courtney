//define variables
var button = document.getElementsByTagName('button')[0];

var yourFortune = document.querySelector('#fortune-wrapper p span');

//create placeholder text and append to yourFortune paragraph
var fortuneTextPlaceholder = document.createTextNode('');
yourFortune.appendChild(fortuneTextPlaceholder);


var magicFortunes = ['It is certain.','It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

//function
var shakeBall = function() {
	//randomize fortune array
	magicFortunes.sort(function(a, b){return 0.5 - Math.random()});
	//print first list item to fortune p span
	var fortuneText = document.createTextNode(magicFortunes[0]);
	yourFortune.appendChild(fortuneText);
	//hide generator button
	var ourButton = document.getElementById('generator-button');
	ourButton.removeChild(button);
	//add class to fortune
	yourFortune.classList.add('fortune-show');
};

//Event handler
button.onclick = shakeBall;