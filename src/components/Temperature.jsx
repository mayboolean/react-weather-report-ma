import { useState } from "react";
import './Temperature.css';

const Temperature = () => {
    const [currTemp, setCurrTemp] = useState(50);

    const colorRange = currTemp => {
        if (currTemp >= 80) {
            return 'red';
        } else if (currTemp >= 70) {
            return 'orange';
        } else if (currTemp >= 60) {
            return 'yellow'
        } else if (currTemp >= 50) {
            return 'green'
        } else {
            return 'teal'
        }
    };

    return (
        <>
            <h2 className={colorRange(currTemp)}>Temperature: {currTemp}</h2>
            <button onClick={() => setCurrTemp(currTemp+1)}>⬆️</button>
            <button onClick={() => setCurrTemp(currTemp-1)}>⬇️</button>
        </>
    );
};

export default Temperature;