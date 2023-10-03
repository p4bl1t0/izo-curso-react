import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';
import Location from './components/Location';
import Counter from './components/Counter';
import Timer from './components/Timers';
import { useState } from 'react';

function App() {
  const persona = { name: 'Pablo', lastname: 'Botta', city: 'Córdoba' };
  const [ showTimer, setShowTimer ] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Curso React
        </p>
        <button onClick={() => {setShowTimer(!showTimer) }}>Cambiar montaje timer</button>
        {showTimer &&
          <Timer />
        }
        <Counter />
        {/* <Counter initialValue={100} />
        <Counter initialValue={1000} /> */}
        {/* <MyFirstComponent person={persona} job={{ name: 'Profesor' }}>
        </MyFirstComponent>
        
        <MyFirstComponent person={{ name: 'Lucas', lastname: 'Giorda', city: 'Rosario' }} job={{ name: 'Profesor' }}>
        </MyFirstComponent> */}

        
        <Location city={'Rosario'}>
          <div>IZO - 2023</div>
        </Location>
        
      </header>
    </div>
  );
}

export default App;
