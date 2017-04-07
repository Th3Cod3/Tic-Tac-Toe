let turn = false
const multiplayer = false
let gameOver = false

document.addEventListener('click', startGame)


function putCircule(ev, computer = false){
	if(computer){
		ev.classList.add('circule')
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
			document.removeEventListener('click', startGame)
			setTimeout(() => { computerTurn() }, 250)
		}
	}
}

function computerTurn () {
	const opts = document.querySelectorAll('[class="cell"]')
	if(!opts.length){ 
		gameOver = true
		startGame()
		return
	}
	const length = opts.length
	const choice = Math.round(Math.random() * (length -1))
	putCircule(opts[choice], true)
	document.addEventListener('click', startGame)
}

function resetGame () {
	const resetCell = document.getElementsByClassName('cell')
	const length = resetCell.length
	for(let i = 0; i < length; i++)
	{
		resetCell[i].className = 'cell'
	}
	gameOver = false
	turn = false
	document.addEventListener('click', startGame)

}

function startGame(ev){
	if(gameOver){
		let reset = confirm('Game Over. Do you wanna play again?')
		if(reset){
			resetGame()
		}
	}else{
		toggleTurn(ev)
	}

}