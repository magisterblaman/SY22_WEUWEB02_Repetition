let myVariable = 0;

if (myVariable == 3) {
	console.log('hejhej');
}

function myFunction() {
	console.log('ran myFunction');
}

let myObj = {
	name: 'Hannes',
	age: 21,
	properties: [
		'perfekt',
		'fantastisk',
		'väldigt cool'
	]
};

myObj.name = 'Blåman';
console.log(myObj.age);

let firstSection = document.querySelector('section');
let secondSection = document.getElementById('my-section');
let secondElementV2 = document.querySelector('#my-section');
let articles = document.getElementsByClassName('news-article');
let articlesV2 = document.querySelectorAll('.news-article');

firstSection.setAttribute('class', 'coolt-element');
let firstSectionClass = firstSection.getAttribute('class');

firstSection.classList.add('hejhej');
firstSection.classList.contains('hejhej');
firstSection.classList.remove('hejhej');
firstSection.classList.toggle('hejhej');

firstSection.style.top = 89 + 'px';

secondSection.innerText = 'hejtjena';

firstSection.appendChild(articles[0]);

let newP = document.createElement('p');

newP.innerText = 'uihdduaihuisdhidas';

articles[1].appendChild(newP);

let counter = 0;

function clickHandler(event) { // händelsehanterare
	event.preventDefault();

	if (event.shiftKey) {
		counter += 10;
	} else {
		counter++;
	}
	newP.innerText = counter;
	console.log(event.shiftKey);
	// alert('händelse');
}

newP.addEventListener('mousedown', clickHandler);