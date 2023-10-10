import { useState, useEffect, useRef, useContext } from "react"
import { TimeContext } from "./TimeContext";

export default function Timer ({ }) {
    const [ seconds, setSeconds ] = useState(0); // estado interno
    const timerIdRef = useRef(null);

    const [ timeValue, setTimeValue ] = useContext(TimeContext);

    const crearTimer = () => {
        timerIdRef.current = setInterval(() => {
            // no puedo leer y escribir el estado en la misma funcion
            setSeconds((_seconds) => _seconds + 1);
            setTimeValue((_time) => _time + 1);
            console.log('timer de un segundo');
        }, 1000); // funcion que es un sistema externo
    }

    useEffect(() =>  {
        crearTimer();
        return () => {
            // limpiar suscripciones a eventos o sistemas
            console.log('limpieza o desmontado del componente');
            clearInterval(timerIdRef.current);
        };
    }, []); // 
    const onPlayOrStopTimer = () => {
        console.log(timerIdRef.current);
        if (timerIdRef.current) {
            clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        } else {
            // setSeconds(0);
            crearTimer();
        }
    }
    return (
        <div>
            <div>Tiempo: { seconds } segundos</div>
            <hr />

            <button onClick={onPlayOrStopTimer}>Activar/Desactivar</button>
            <hr />
        </div>
    )
}