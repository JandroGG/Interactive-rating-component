import React, {useState} from 'react';
import './App.css';
import PrimeraFase from './componentes/PrimeraFase';
import SegundaFase from './componentes/SegundaFase';

function App() {
    const [voto, setVoto] = useState([false, 5]);
    return (
    <div className="App">
        {voto[0]?(<SegundaFase puntos={voto[1]}/>):(<PrimeraFase setVoto={setVoto}/>)}
    </div>
    )
}
export default App;
