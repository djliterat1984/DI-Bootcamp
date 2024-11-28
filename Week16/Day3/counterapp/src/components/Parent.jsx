import Child from './Child';

const Parent = ( props ) => {
	console.log(props);
	
	if(props.auth == 'admin') 
		return props.children
}

export default Parent