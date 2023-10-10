import { useState, useRef, useEffect, useContext } from "react";
import { TimeContext } from "./TimeContext";

export function StepInput ({ step, onStepChange, ref }) {
    const inputStepRef = useRef(null);
    const [ timeValue ] = useContext(TimeContext);
    useEffect(() => {
        // en este caso el sistema externo es el elemento del DOM input que es imperativo
        if (inputStepRef.current) {
            // focus es una funcion imperativa
            inputStepRef.current.focus();
            // inputStepRef.current representa al objeto document.getElementById('paso')
        }
    }, []); // [] array vacio, ser undefined

    return (

        <>
            <label htmlFor="paso">Valor del paso ({ timeValue }): </label>
            {/* input CONTROLADO porque React maneja su estado */}
            <input 
                id="paso" 
                type="number" 
                value={step} 
                onChange={onStepChange}   
                ref={inputStepRef}
            />
        </>
    )
}