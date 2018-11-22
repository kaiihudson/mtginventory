//Get elements from HTML
const 	app = document.getElementById('root'),
		img1 = document.getElementById('img1'),
		img2 = document.getElementById('img2'),
		img3 = document.getElementById('img3'),
		btn1 = document.getElementById('btn1'),
		btn2 = document.getElementById('btn2'),
		btn3 = document.getElementById('btn3');

//Requests shortcut
// const request = new XMLHttpRequest();

//Create elements on the HTML via JS
const logo = document.createElement('img');
const button = document.createElement('div');

//Sources
logo.src = './images/mainlogo.png';

app.appendChild(logo);

//Functions
function call() {
	let cardname = prompt("card name", "card");
	return cardname
};
function status(response) {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(new Error(response.statusText))
	}
};
function json(response) {
	return response.json()
}

// WITH MTG API (response has only 100 registers, how do i dig deeper?)
const header = new Headers();
const inits= {
	method: 'GET',
	headers: header,
	mode: 'cors',
	cache: 'default'};
const name = call(); 	
const page = 'https://api.magicthegathering.io/v1/cards/?name=' + name
fetch(page, inits)
	.then(status)
	.then(json)
	.then(function(data){
		console.log('request succeeded', data);
	}).catch(function(error) {
		console.log('request failed', error);
	});

