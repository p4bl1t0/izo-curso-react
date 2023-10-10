import logo from './logo.svg';
import './App.css';
import Location from './components/Location';
import Counter from './components/Counter';
import { useState, useRef, useEffect } from 'react';
import { TimerWrapper } from './components/TimerWrapper';
import { TimeContextProvider } from './components/TimeContext';

function App() {
  const [ showTimer, setShowTimer ] = useState(true);
  const [ unControlledText, setUnctrolledText ] = useState('');
  const fakeDatePickerRef = useRef(null);
  useEffect(() => {
    // fake event datepicker
    fakeDatePickerRef.current.onchange = (event) => {
      console.log(event.target.value);
      setUnctrolledText(event.target.value)
    };
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Curso React
        </p>
        <TimeContextProvider>
          <button onClick={() => {setShowTimer(!showTimer) }}>Cambiar montaje timer</button>
          {showTimer &&
            <TimerWrapper />
          }
          <Counter />
        </TimeContextProvider>
        <Location city={'Rosario'}>
          <div>IZO - 2023</div>
        </Location>
        <input type='text' id="fakeJqueryUiDatepicker" ref={fakeDatePickerRef}   />
        <div>Valor de input no controlado por React: { unControlledText }</div>
      </header>
    </div>
  );
}

export default App;
