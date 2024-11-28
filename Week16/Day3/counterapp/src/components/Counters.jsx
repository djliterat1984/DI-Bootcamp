const Counters = ( props ) => {
	
	return (
		<>
			<h2>My Counter</h2>
			<button onClick={() => props.onClick((prev) => prev+1)}>
				count is {props.count}
			</button>
		</>
		
	)
}

export default Counters;