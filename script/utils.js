function createRemoveButton(parent) {
	let button = document.createElement('button')
	button.innerText = 'Ta bort'
	button.addEventListener('click', () => {
		parent.remove()
	})
	return button
}

export { createRemoveButton }
