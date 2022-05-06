import React, {useState} from 'react';
import favicon from '../images/icon-star.svg'
import RateList from '../componentes/RateList'
import Submitbtn from '../componentes/SubmitBtn'

const PrimeraFase= ({setVoto}) => {
    const [color, setColor] = useState(["normal", "normal", "normal", "normal", "normal"]);
    return (
        <div className="cards">
        <article className="card" >
            <div className="star-container">< img src={favicon} alt="start" className="star" /></div>
            <p className="card-title">How did we do?</p>
            <p className="card-text"> Please let us know how we did with your support request. All
                feedback is appreciated 
                to help us improve our offering!</p>
            <div className="card-puntos">
                <RateList color={color} setColor={setColor}/>
            </div>
            <Submitbtn  setVoto={setVoto}/>
        </article>
    </div>
    )
}
export default PrimeraFase;