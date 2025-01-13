import React, { type ReactElement, type ReactNode } from 'react'

interface greetingProps {
	name: string;
	messageCount: number;
}

const Greeting = ( { name, messageCount} :greetingProps):ReactNode => {
	return (
		<div>
			<h2>{ name } { messageCount}</h2>
		</div>
	)
}

export default Greeting