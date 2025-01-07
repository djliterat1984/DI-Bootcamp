import { useRef, type ChangeEvent, type ChangeEventHandler, useState, createContext, useMemo, useEffect, useCallback, MouseEvent, KeyboardEvent } from 'react';
import './App.css';
import Heading from './components/Heading';
import List from './components/List';
import Section from './components/Section';

interface UserI {
    id: number;
    username: string;
}

interface AuthI {
    token: string;
    userid: number;
}

export const AuthContext = createContext<AuthI | null>(null);

function App() {
    useEffect(() => {
        return () => {
            console.log('ffff');
        };
    }, []);

    const heavyTask = (): number => {
        return 100;
    };

    const result = useMemo<number>(() => heavyTask(), []);

    const [first, setfirst] = useState<number>(2);

    const [users, setUsers] = useState<UserI[] | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const strRef = useRef<string>('');
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);

        console.log(inputRef.current?.value);
    };

    const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);

        console.log(inputRef.current?.value);
    };

    const addTwo = useCallback((e: MouseEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
        console.log(e);
    }, []);

    return (
        <>
            <h2>Typescript with react</h2>
            <Heading
                title={'Breaking new'}
                subtitle='Sub title'
            />
            <Section content={12343}>1234566</Section>
            <List items={['1', '2', '3']} />
            <input
                placeholder='Write something'
                ref={inputRef}
                onChange={(e) => handleChange(e)}
            />
        </>
    );
}

export default App;
