import React, {useMemo} from 'react'
import { ReactionButton } from './ReactionButton';

export const Article = ( props ) => {
	const { item } = props;
	
	return (
		<article key={item.post.id}>
			<h2>{ item.post.title }</h2>
			<h4>{ item.post.body }</h4>
			<ReactionButton
				thumbsUpCount={ item.thumbsUpCount }
				wowCount={ item.wowCount }
				heartCount={ item.heartCount }
				rocketCount={ item.rocketCount }
				coffeeCount={ item.coffeeCount }
				id={item.post.id}
			/>
		</article>
	)
}

