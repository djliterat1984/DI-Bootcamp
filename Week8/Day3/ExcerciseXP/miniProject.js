let gridContainer = document.getElementById( 'gridContainer' );
let currentColor = ''
let isMouseDown = false

for (let i = 0; i < 2015; i++) {
	let cell = document.createElement( 'div' );
	cell.className = 'gridItem'
	gridContainer.appendChild( cell )
	cell.addEventListener( 'mousedown', () =>
	{
		cell.style.backgroundColor = currentColor
		isMouseDown = true;
	} )
	cell.addEventListener( 'mouseover', () =>
	{
		if ( isMouseDown )
			cell.style.backgroundColor = currentColor
	} )
	cell.addEventListener('mouseup',() => isMouseDown = false)
	i++
}

let clearBtn = document.getElementById( 'clearBtn' )

clearBtn.addEventListener( 'click', () =>
{
	clearBtn.style.backgroundColor = 'white'
	for (let i = 0; i < gridContainer.children.length; i++) {
		const gridCell = gridContainer.children[ i ];
		gridCell.style.backgroundColor = 'white'
	}
} )

let colors = document.getElementsByClassName( 'boxColor' )
for (let i = 0; i < colors.length; i++) {
	let colorElement = colors[ i ]
	colorElement.addEventListener( 'mousedown', () =>
	{
		let classname = colorElement.className
		currentColor = classname.split( ' ' )[ 1 ];
		
	} )
	
}
