import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchUserPosts } from "./state/slice";

const UsersBox = ( props ) => {
	const userPosts = useSelector((state) => console.log(state.userPostReducer.userPosts));
  // const status = useSelector((state) => state.userPostReducer.status);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUserPosts())
  },[])
	
	return (
		<>
			<h4>Authors</h4>
			<select>
				<option value="">Select Author....</option>
				{
					console.log('===>',userPosts)
					
				}
			</select>
		</>
	)
}

export default UsersBox;
