import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: "Jhon", email: "jjj@gmail.com" },
    { id: 2, name: "Anne", email: "aaa@gmail.com" },
    { id: 3, name: "Dan", email: "ddd@gmail.com" },
  ],
};

const usersSlice = createSlice( {
	name: 'users',
	initialState,
	reducers: {
		addUser: ( state, action ) => {
			console.log(action);
			const user = {id:state.users.length + 1, name: action.payload.name, email: action.payload.email}
			state.users.push(user)
		},
		addUserPrepare: {
			prepare ( name, email ) {
				return { payload: { id: nanoid(), name, email } };
			},
			reducer ( state, action ) {
				state.users.push( action.payload );
			}
			
		}
	}

} )

export const { addUser, addUserPrepare} = usersSlice.actions;
export default usersSlice.reducer;