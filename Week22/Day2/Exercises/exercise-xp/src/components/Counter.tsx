import React, { useState, type ReactNode } from 'react';

interface CounterI {
	value?: number;
	lastAction?: 'ADD' | 'MINUS';
}

const Counter = (): ReactNode => {
    const [counter, setCounter] = useState<CounterI>({value: 0});
    return (
        <div>
            Counter
					<h2>{ counter?.value }</h2>
					<button onClick={ (): void => setCounter( {value: counter?.value! + 1, lastAction:'ADD'} )}>Add</button>
					<button onClick={():void => setCounter({value: counter?.value! - 1, lastAction:'MINUS'})}>Min</button>
        </div>
    );
};

export default Counter;
