export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, completed: action.payload.completed },
      ];
		case "REMOVE_TASK":
			return state.filter( ( todo ) => todo.id !== action.payload );
    default:
      return state;
  }
}