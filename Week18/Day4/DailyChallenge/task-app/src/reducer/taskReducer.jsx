export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      console.log( state );
      console.log( action.payload );
      return {
        ...state,
        tasks: [ ...state.tasks,
          { id: Date.now(), text: action.payload.text, completed: action.payload.completed } ]
      }
		case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter( ( todo ) => todo.id !== action.payload )
      }
    case "EDIT_TASK":
      const newArray = state.tasks.map( item => {
        if ( item.id == action.payload.id ) {
          item.text = action.payload.text;
          item.completed = action.payload.completed;
        }
        return item;
      } )
      return {...state, tasks:[...newArray]};
    case "FILTER_TASK":
      if ( action.payload === 'all' ) {
        console.log(state);
              
        return {...state, filteredTasks: []};
      }
      else if ( action.payload === 'completed' ) {
        const filteredTasks = state.tasks.filter( item => item.completed );
        return {...state, filteredTasks:[...filteredTasks]}
      }
      
    default:
      return state;
  }
}