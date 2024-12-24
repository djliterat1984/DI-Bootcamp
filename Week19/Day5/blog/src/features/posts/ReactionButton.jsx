import React, { memo } from 'react';
import { useAddReaction } from './state/hooks';

const reactionEmoji = {
	thumbsUp: "👍",
	wow: "😮",
	heart: "❤️",
	rocket: "🚀",
	coffee: "☕",
};

const ReactionButton = ( {post} ) => {
	const { id, reactions } = post;
	const callAddReaction = useAddReaction();

	const renderReaction = Object.entries( reactionEmoji ).map( ( [ name, emoji ] ) => {
		return (
			<button
				key={ name }
				onClick={ () => callAddReaction(id,name)}
				className='reactionButton'
			>
				{ emoji } { reactions[ name ] }
			</button>
		)
	} ); 
	
	return (
		<>
			<h2>{renderReaction}</h2>
		</>
	)
}

export default memo( ReactionButton );
