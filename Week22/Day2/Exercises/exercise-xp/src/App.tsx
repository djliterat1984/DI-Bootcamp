import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import UserList from './components/UserList';

function App() {
    return (
        <>
            <UserList />
            <Greeting
                name='John'
                messageCount={1}
            />
            <Counter />
            <UserCard
                name='Albert'
                age={50}
                role='Director'
            />
            <UserCard
                age={35}
                role='Admin'
            />
            <UserCard
                name='Alice'
                role='Worker'
            />
            <UserCard
                name='Jim'
                age={24}
            />
            <UserCard name='Anne' />
        </>
    );
}

export default App;
