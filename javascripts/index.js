//Get elements from HTML
const 	app = document.getElementById('root'),
		btn1 = document.getElementById('btn1'),
		btn2 = document.getElementById('btn2'),
		btn3 = document.getElementById('btn3');

//Requests shortcut
const request = new XMLHttpRequest();

//Create elements on the HTML via JS
const logo = document.createElement('img');
const button = document.createElement('div');

//Sources
logo.src = './images/mainlogo.png';


request.open('GET', 'https://api.magicthegathering.io/v1/cards', true);

app.appendChild(logo);
request.onload = function(){
	//access JSON data on API
	const data = JSON.parse(this.response);
	console.log(data);
	if (request.status >= 200 && request.status < 400){
			data.cards.forEach(function(card) {
				console.log(card);
			});
		} else {
			console.log("we've got an error in our hands")
		}
	}

request.send();