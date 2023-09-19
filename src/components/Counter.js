import { useState } from "react";

export default function Counter ({ initialValue = 0 }) {
    // initialValue = initialValue || 0;
    // step = step || 1;
    /* Cuerpo del componente */
    /* const arr = useState(0); 
    const counter = arr[0];
    const setCounter = arr[1]; */
    const [ step, setStep ] = useState(1);
    const [ counter, setCounter ] = useState(initialValue);

    const onButtonClick = (sumarDoble) => {
        setCounter(function (prevCounter) {
            return prevCounter + step
        });
        /* 
        
        Codigo / Logica
        
        */
       if (sumarDoble) {
        setCounter(counter => counter + step)
       }
    };

    const onStepChange = (event) => {
        console.log(typeof event.target.value,  event.target.value);
        setStep(Number(event.target.value));
    }

    return (
        <div>
            <label htmlFor="paso">Valor del paso: { step }</label>
            <input id="paso" type="number" value={step} onChange={onStepChange}   />
            <div>Contador: { counter }</div>
            <button onClick={() => { onButtonClick(false) }}>Sumar </button>
            <button onClick={() => { onButtonClick(true) }}>Sumar doble</button>
        </div>
    )
}