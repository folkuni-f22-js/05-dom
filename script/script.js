import { createRemoveButton } from "./utils.js"

console.log('Hello world')


// Variables for DOM elements
const h1 = document.querySelector('h1')
const button = document.querySelector('button')
const buttonClicks = document.querySelector('.button-clicks')
const toggleButton = document.querySelector('#toggle-button')
const toggleVisibility = document.querySelector('#toggle-visibility')
const toggleVisibilityText = document.querySelector('#toggle-visibility-text')
const textInput = document.querySelector('#text-input')
const textMessage = document.querySelector('#text-message')
const numberList = document.querySelector('#number-list')
const addNumber = document.querySelector('#add-number')
const clearNumbers = document.querySelector('#clear-numbers')
// Alternativa sätt att plocka ut element: getElementById, getElementsByClassName, getElementsByTagName

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

textInput.addEventListener('keydown', event => {
	console.log('Key down: ', event.key, event.target.value)
})
textInput.addEventListener('keyup', event => {
	console.log('Key up: ', event.key, event.target.value)
})


addNumber.addEventListener('click', () => {
	const clicks = state.clicks
	let element = document.createElement('li')
	element.innerText = 'Klick: ' + String(clicks)

	const button = createRemoveButton(element)
	element.append( button )
	// element.append(createRemoveButton(element) )

	numberList.append(element)
})
clearNumbers.addEventListener('click', () => {
	numberList.innerHTML = ''
})

