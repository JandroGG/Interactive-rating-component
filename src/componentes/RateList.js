import React from 'react';
import Rate from './Rate'

const RateList = ({color, setColor}) => {
    const listaNumeros = [1,2,3,4,5];
    return ( 
        <>
            {listaNumeros.map( (item, index) =>
            <div className='puntuacion' key={item}><Rate colorComp={color[index]} setColor={setColor} value={item}/></div>)}
        </>
     );
}
export default RateList;