import { useRef , useState} from 'react';

function AppRef () {
  
	// const exampleRef = useRef({a:'abc'});
	
	const [count, setCunt] = useState(0)
	let name = 'Dan';
	const nameRef = useRef( 'John' );
	console.log( name );
	console.log(nameRef);
	
	// console.log(exampleRef.current);
	// const nameInputRef = useRef();
	
	const handleClick = () => {
		//console.log( divRef.current );
		// divRef.current.style.backgroundColor = 'yellow'
		// console.log(nameInputRef.current.value)
	}
	
	return (
		<>
			<h2>The useRef Hook</h2>
			{/* <div ref={ divRef }>
				<h2>My div</h2>
				<button onClick={ handleClick }>Click</button>
			</div> */}
			<button onClick={ handleClick }>Click</button>
			<h2>{ name }</h2>
			<h2 ref={nameRef}></h2>
			{/* <input ref={nameInputRef}/> */}
		</>
  )
}

export default AppRef