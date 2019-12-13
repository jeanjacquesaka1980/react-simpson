import React from 'react';
import './index.css';

const Card = (props) => {
    return (
        <div className="col-6">
            <div className="card card-profiles border-0 m-2 shadow">
                <div className="row">
                    <div className="col-md-4">
                        <img src={props.src} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.birth}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Card;