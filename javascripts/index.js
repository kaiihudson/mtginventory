const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = './images/mainlogo.png';

app.appendChild(logo);

const request = new XMLHttpRequest();

request.open('GET', 'https://api.magicthegathering.io/v1/cards', true);

request.onload = function(){
	//access JSON data on API
	const data = JSON.parse(this.response);
	if (request.status >= 200 && request.status < 400){
		data.forEach(cards => {
				console.log('cards'.name);
			});
		} else {
			conole.log("we've got an error in our hands")
		}
	}

request.send();