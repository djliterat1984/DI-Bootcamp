let styleButton = document.getElementById( 'jsstyle' )

styleButton.addEventListener('mouseover', function () {
	styleButton.style.backgroundColor = 'red';
	styleButton.style.color = 'white'
	styleButton.style.fontSize = '26'
})

styleButton.addEventListener('mouseout', function () {
	styleButton.style.backgroundColor = 'white';
	styleButton.style.color = 'red'
	styleButton.style.fontSize = '20'
} )

styleButton.addEventListener( 'click', buttonClick );


function buttonClick ()
{
	styleButton.style.backgroundColor = 'green'
	
}

function insertRow ()
{
	let table = document.getElementById( 'sampleTable' );	
	let row = table.insertRow( -1 );
	let cell1 = row.insertCell( 0 )
	let cell2 = row.insertCell( 1 )
	cell1.textContent = "New Cell1"
	cell2.textContent = 'New cell2'
}