console.log('Hello world')


// Variables for DOM elements
let h1 = document.querySelector('h1')
let button = document.querySelector('button')
let buttonClicks = document.querySelector('.button-clicks')
let toggleButton = document.querySelector('#toggle-button')
let toggleVisibility = document.querySelector('#toggle-visibility')
let toggleVisibilityText = document.querySelector('#toggle-visibility-text')
// console.log( 'h1:', h1 )


// State
let state = {
	clicks: 0,
	isOn: true,
	isVisible: true
}


// Events
button.addEventListener('click', event => {
	console.log('Du klickade på knappen')
	// console.log(event)
	state.clicks = state.clicks + 1
	buttonClicks.innerText = 'Antal klick: ' + state.clicks
	
})

toggleButton.addEventListener('click', () => {
	state.isOn = !state.isOn
	if (state.isOn ) {
		toggleButton.innerText = 'On'
	} else {
		toggleButton.innerText = 'Off'
	}
})

toggleVisibility.addEventListener('input', event => {
	// Uppdatera state
	const checked = event.target.checked
	console.log('Checkbox change (input event) -> ', checked)
	state.isVisible = checked

	// Uppdatera gränssnittet = rendera (UI)
	if( state.isVisible ) {
		toggleVisibilityText.classList.remove('invisible')
	} else {
		toggleVisibilityText.classList.add('invisible')
	}
})