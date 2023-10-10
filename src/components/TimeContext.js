import { createContext, useState } from "react";

export const TimeContext = createContext(null);

export const TimeContextProvider = ({ children }) => {

    const [ time, setTime ] = useState(222);

    return (
        <TimeContext.Provider value={[ time, setTime ]}>
            { children }
        </TimeContext.Provider>
    )
}

