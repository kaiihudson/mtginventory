//Get elements from HTML
const 	app = document.getElementById('root'),
		img1 = document.getElementById('img1'),
		img2 = document.getElementById('img2'),
		img3 = document.getElementById('img3'),
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


/*const magicApi = require('mtgsdk')

magicApi.card.all()
.on('data', function(card) {
	console.log(card.name)
})*/
request.open('GET', 'https://api.magicthegathering.io/v1/cards', true);


app.appendChild(logo);
request.onload = function(){
	//access JSON data on API
	const response = JSON.parse(this.response);
	const cards = response.cards;
	//console.log(data)
	if (request.status >= 200 && request.status < 400){
		let search = cards.filter( card => card.cmc == 2);
		console.log(search);

		img1.appendChild('img')


		} else {
			console.log("we've got an error in our hands")
		}
	}
request.send();