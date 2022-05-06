import React from 'react';

const SubmitBtn = ({setVoto}) => {
    const clickado = () =>{
        let voto =document.querySelector(".gris")
        if(document.querySelector(".gris")){
            voto = voto.textContent
            setVoto([true, voto]);
        }
    }
    return ( 
        <button className="orange" onClick={clickado}>SUBMIT</button>
     );
}
 
export default SubmitBtn;