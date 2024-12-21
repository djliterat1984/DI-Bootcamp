import React, { memo } from 'react';
import { useDispatch } from "react-redux";
import { add } from './state/postsSlice';

export const ReactionButton = ( props ) => {
	const { thumbsUpCount, wowCount, heartCount, rocketCount, coffeeCount, id } = props
	const dispatch = useDispatch();
	console.log('rendering ' + id);
	
	const reactionEmoji = {
		thumbsUp: "👍",
		wow: "😮",
		heart: "❤️",
		rocket: "🚀",
		coffee: "☕",
	};

	return (
		<div >
			<button onClick={ () => dispatch( add( {id: id, emoji:'thumbsUp'} ))} className='reactionButton'>{ reactionEmoji.thumbsUp }: {thumbsUpCount}</button>
			<button onClick={ () => dispatch( add( {id: id, emoji:'wow'} ))} className='reactionButton'>{ reactionEmoji.wow }: {wowCount}</button>
			<button onClick={ () => dispatch( add( {id: id, emoji:'heart'} ))} className='reactionButton'>{ reactionEmoji.heart }: {heartCount}</button>
			<button onClick={ () => dispatch( add( {id: id, emoji:'rocket'} ))} className='reactionButton'>{ reactionEmoji.rocket }: {rocketCount}</button>
			<button onClick={ () => dispatch( add( {id: id, emoji:'coffee'} ))} className='reactionButton'>{ reactionEmoji.coffee }: {coffeeCount}</button>
		</div>
	)
}
