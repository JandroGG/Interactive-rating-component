import React from 'react';
import thankyou from '../images/illustration-thank-you.svg'

const SegundaFase = ({puntos}) =>{
    return (
        <div id="thankyou">
            <article className="thankyou">
                <div className="thank-img-container"><img src={thankyou} className="thank-img" alt="thank-img"/></div>
                <p className="thank-resultado">You selected <span className="resultado ">{puntos}</span> out of 5</p>
                <h2 className="thank-card-title">Thank you!</h2>
                <p className="thank-card-text">We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!</p>
            </article>
        </div>
    )
}
export default SegundaFase;