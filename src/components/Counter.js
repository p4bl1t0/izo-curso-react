import { useState, useRef, useEffect } from "react";

export default function Counter ({ initialValue = 0 }) {
    // initialValue = initialValue || 0;
    // step = step || 1;
    /* Cuerpo del componente */
    /* const arr = useState(0); 
    const counter = arr[0];
    const setCounter = arr[1]; */
    const [ showStep, setShowStep ] = useState(false);
    const [ step, setStep ] = useState(1);
    const [ counter, setCounter ] = useState(initialValue);
    const inputStepRef = useRef(null);

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

    const isOnline = true;

    let jsxRepetitivo = (
        <div>
            Esto es repetitivo.
        </div>
    );

    // Puertas de escape
    // useRef: tomar referencias de valores mutables / Cómo «recordar» información sin volver a renderizar : elementos del dom, timerIds
    // Focus / timers
    // useEffect: sincronizarme con sistemas externos y ciclo de vida, ejemplo: DOM API (scroll), Backend API, timers
    // al montarse
    // useContext: compartir estados entre componentes
    // 

    const showStepButtonHandler = () => { 
        let newState = !showStep;
        setShowStep(newState);
        // el input paso no se renderizó aun como para darle foco
    };
    const focusButtonHandler = () => { 
        console.log(inputStepRef.current);
        if (inputStepRef.current) {
            // focus es una funcion imperativa
            inputStepRef.current.focus();
            // inputStepRef.current representa al objeto document.getElementById('paso')
        }
    };
    useEffect(() => {
        console.log('Me ejecuto con el array vacio cuando se monta el componente');
    }, []); // Array vacio como dependencia, se ejecuta solo al inicio, solo cuando se muestra por primera vez el componente (montar)
    useEffect(() => {
        console.log('Me ejecuto con las dependencias = undefined (sin dependecias) cada vez');
    }); // esto se va a ejecutar cada vez que cambie un estado cualquiera del componente

    useEffect(() => {
        // react va ejecutar este efecto, luego del renderizado ante cada cambio de showStep
        console.log('me ejecuto ante un cambio de Show Step', showStep);
        // en este caso el sistema externo es el elemento del DOM input que es imperativo
        if (inputStepRef.current) {
            // focus es una funcion imperativa
            inputStepRef.current.focus();
            // inputStepRef.current representa al objeto document.getElementById('paso')
        }
    }, [showStep]); // [] array vacio, ser undefined
    
    if (isOnline) {
        // VDOM no es DOM ... estamos programando de manera DECLARATIVA los compenentes
        return (
            <div style={{ marginBottom: 25 }}>
                { jsxRepetitivo }
                { showStep &&
                    <>
                        <label htmlFor="paso">Valor del paso: </label>
                        <input 
                            id="paso" 
                            type="number" 
                            value={step} 
                            onChange={onStepChange}   
                            ref={inputStepRef}
                        />
                    </>
                }
                <div>Contador: { counter } / { counter % 2 === 0 ? '(par)' : '(impar)'}</div>
                { counter < 105 && // true
                    <div>
                        <button onClick={() => { onButtonClick(false) }}>Sumar </button>
                        <button onClick={() => { onButtonClick(true) }}>Sumar doble</button>
                    </div>
                }
                { counter > 105 && // else
                    <div>
                        <button onClick={() => { setCounter(0) }}>Resetear </button>
                    </div>
                }
                <button onClick={showStepButtonHandler}>{ showStep ? 'Ocultar' : 'Mostrar' } step</button>
                <button onClick={focusButtonHandler}>Dar foco</button>
                <hr />
            </div>
        )
    } else {
        return (
            <div>

                { jsxRepetitivo }
                NO tienes conexion a intenet.
            </div>
        )
    }
}