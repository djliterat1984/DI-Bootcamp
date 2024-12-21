import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addOne, minusOne } from '../redux/actions';
import { INCREMENT, DECREMENT } from '../redux/actions'; 

const Counter = ( props ) => {
	const dispatch = useDispatch();
  const count = useSelector(state => state.count)
	
	return (
		<>
			<h2>The Redux Counter</h2>
			<div>
				<h2>Count: { count }</h2>
				<button onClick={() => {dispatch({type:INCREMENT, payload: 2})}}>+</button>
				<button onClick={() => {dispatch(minusOne(3))}}>-</button>
			</div>
			
		</>
	)
}

export default Counter;

/*
in class component: 
- to get the dispatch (instead useDispatch):
		1) add 'connect()(<name of the component>)' after words 'export default' ==>  export default connect()(Counter);
		2) in this.props we will get the dispacth method ==> const {dispatch} = this.props;

- to get the state (instead useSelector) ==> 
1) const mapStateToProps = (state) => {   *** we can call with another name to this variable instead mapStateToProps ==> for example: mapState
		return{
			count: state.count; (if we using reduxtoolkit ==> state.counterReducer.count)
		}
	}
	
2) add mapState... to the connect => connect(mapStateToProps)(Counter)
3) in this.props we receive the count state => const {count} = this.props

-to get the reducer functions:

1) mapDispatchToProps = {
	return{
		add: () => dispatch({type: INCREMENT, payload: 4})
	}
}

add this to connect like a second parameter:
connect(mapStateToProps,mapDispatchToProps)(Counter)


*/
