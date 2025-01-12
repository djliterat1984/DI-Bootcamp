import React, { type ReactElement, type ReactNode } from 'react'

interface greetingProps {
	name: string;
	messaggeCount: number;
}

const Greeting = ( { name, messaggeCount} :greetingProps):ReactNode => {
	return (
		<div>
			<h2>{ name } { messaggeCount}</h2>
		</div>
	)
}

export default Greeting