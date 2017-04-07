let turn = false
const multiplayer = false

document.addEventListener('click', toggleTurn)

function function_name (argument) {
	// body... 
}

function putCircule(ev, computer = false){
	if(computer){
		console.log(ev.classList.add('circule'))
	}else {
		ev.target.classList.add('circule')
	}
}

function putX(ev){
	ev.target.classList.add('x')

}

function toggleTurn (ev) {
	if(turn){
		putCircule(ev)
		turn = false
	}else {
		if(multiplayer){
			putX(ev)
			turn = true
		}else{
			putX(ev)
			document.removeEventListener('click', toggleTurn)
			setTimeout(() => { computerTurn() }, 250)
		}
	}
}

function computerTurn () {
	const opts = document.querySelectorAll('[class="cell"]')
	if(!opts){ return}
	const length = opts.length
	const choice = Math.round(Math.random() * (length -1))
	putCircule(opts[choice], true)
	document.addEventListener('click', toggleTurn)
}


