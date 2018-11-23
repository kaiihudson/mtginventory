//Get elements from HTML
const 	app = document.getElementById('root'),
		img1 = document.getElementById('img1'),
		img2 = document.getElementById('img2'),
		img3 = document.getElementById('img3'),
		btn1 = document.getElementById('btn1'),
		btn2 = document.getElementById('btn2'),
		btn3 = document.getElementById('btn3'),
<<<<<<< HEAD
		result = document.getElementById('results')

//Requests shortcut
=======
		res = document.getElementById('results'),
		resultado2 = "";
>>>>>>> 490e1f3f16712f2866bfb5c7c23545a04131025b

//Create elements on the HTML via JS
const logo = document.createElement('img');
const answer = document.createElement('div');

//Sources
logo.src = './images/mainlogo.png';

app.appendChild(logo);

//Functions
function call() {
	let name = prompt("card name", "card");
 	let page = 'https://api.magicthegathering.io/v1/cards/?name=' + name
	return fetch(page, inits)
	.then(status)
	.then(json)
	.then(function(data){
		return data;
		//console.log('request succeeded', data);
		})
	.catch(function(error) {
		console.log('request failed', error);
		});
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
function call2(){
	let resultado = call();
	console.log(resultado);
}
// WITH MTG API (response has only 100 registers, how do i dig deeper?)
const header = new Headers();
const inits= {
	method: 'GET',
	headers: header,
	mode: 'cors',
	cache: 'default'};
<<<<<<< HEAD
//const name = call(); 	
const page = 'https://api.magicthegathering.io/v1/cards/?name=' + name
fetch(page, inits)
	.then(status)
	.then(json)
	.then(function(data){
		console.log('request succeeded', data);
	}).catch(function(error) {
		console.log('request failed', error);
	})
	.then(blob(response).then(function(response) {
		results.innerHTML = response;
	}));

=======
if (resultado2 != "") {
	console.log(resultado2.cards)
	res.innerHTML = resultado2
}
	
>>>>>>> 490e1f3f16712f2866bfb5c7c23545a04131025b
