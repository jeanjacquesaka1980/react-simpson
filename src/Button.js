import React from 'react';
import './index.css';


const Button = (props) => {
    return (
        <div className="col-12 button-container">
            <button onClick={props.onClick} type="button" className="btn m-4">Get a quote !</button>
        </div>
    )
}




export default Button;