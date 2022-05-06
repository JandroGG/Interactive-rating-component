import React from 'react';

const Rate = ({ colorComp, value, setColor }) => {
    const clickado = (event) => {
        const colorArray = new Array(5).fill("normal");
        colorArray[event.target.textContent-1] = "gris";
        setColor(colorArray);
    }
    return (
        <><div onClick={clickado}className={colorComp}>{value}</div></>
    )
  }
  export default Rate;
