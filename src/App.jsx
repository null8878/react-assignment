import { useReducer, useEffect } from 'react';
import './App.css'
import chef from './photos/Chef.png';
function Header({name, year}) {
    return (
        <header>
            <h1>{name}'s Kitchen</h1>
            <p>Copyright {year}</p>
        </header>
    );
}
const items = [
    'Fish Taco',
    'Sopa',
    'Birra'
];

const animals = ['Giraffe', 'Zebra', 'Bear'];
const [firstAnimal, , thirdAnimal] = animals;
console.log(firstAnimal); // Giraffe
console.log(thirdAnimal); // Bear

function statusReducer(status) {
    return !status;
}

// Generate objects with unique IDs
function Main({ dishes, openStatus, onStatus }) {
    return (
        <>
            <h2>Welcome to this beautiful restaurant</h2>
            <p>The restaurant is {openStatus ? 'Open' : 'Closed'}</p>
            <button onClick={onStatus}>Toggle from Main</button>
            <main>
                <img src={chef} alt="Chef" height={200} />
                <ul style={{ listStyleType: 'none' }}>
                    {dishes.map((dish, index) => (
                        <li key={index}>{dish}</li>
                    ))}
                </ul>
            </main>
        </>
    );
}

function App() {
    const [status, toggle] = useReducer(statusReducer, true);

    useEffect(() => {
        console.log(`The restaurant is ${status ? 'open' : 'closed'}`);
    }, [status]);

    return (
        <>
            <Header name="Edward" year={new Date().getFullYear()} />
            <h1>The restaurant is currently {status ? 'Open' : 'Closed'}</h1>
            <button onClick={toggle}>{status ? 'Close Restaurant' : 'Open Restaurant'}</button>
            <Main
                dishes={items}
                openStatus={status}
                onStatus={toggle}
            />
        </>
    );
}

export default App;
