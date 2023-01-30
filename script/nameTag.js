
// skapa HTML struktur
// skriva CSS
// plocka ut DOM-element
// lägga till klickfunktion till knappen:
// - plocka ut det användaren skrivit
// - använda det användaren skrivit in till namnlappen

const inputs = {
	name: document.querySelector('#name-input'),
	color: document.querySelector('#color-input')
}

const generateNameTag = document.querySelector('#generate-name-tag')
const nameTagPreview = document.querySelector('.name-tag-preview')

generateNameTag.addEventListener('click', () => {
	let name = inputs.name.value
	let color = inputs.color.value

	nameTagPreview.innerText = name
	nameTagPreview.style = `background-color: ${color};`
})

// const bodyElement = document.body;

// submitButton.addEventListener('click', event => {
// 	let namePlate = document.createElement('div')
// 	let namePlateText = document.createElement('p')
// 	bodyElement.appendChild(namePlate)
// 	namePlate.appendChild(namePlateText)

// 	if (inputs.name != '') {
// 		/// ....
// 	}
// })