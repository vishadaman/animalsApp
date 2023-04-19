import { useState } from "react";
import AnimalShow from "./AnimalsShow";

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'horse', 'dear'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return <>
        <div>
            <button onClick={handleClick}>Add animals</button>
            <div>{renderAnimals}</div>
        </div>
    </>
}

export default App;