console.log('Hello world')

let h1 = document.querySelector('h1')
let button = document.querySelector('button')
let buttonClicks = document.querySelector('.button-clicks')
// console.log( 'h1:', h1 )

let clicks = 0

button.addEventListener('click', event => {
	console.log('Du klickade på knappen')
	// console.log(event)
	clicks = clicks + 1
	buttonClicks.innerText = 'Antal klick: ' + clicks
	
})