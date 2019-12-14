import React from 'react';
import './index.css';


const Button = (props) => {
    return (
        <button onClick={props.onClick} type="button" className="btn m-4">Get a quote !</button>

    )
}




export default Button;