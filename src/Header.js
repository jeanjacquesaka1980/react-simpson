import React from 'react';
import './index.css';
import title from './images/title.png';

const Header = (props) => {
    return (
        <div>
            <header className="header">
                <div className="image-container text-center">
                    <img className="title" src={title} />
                </div>
            </header>
        </div>
    )
}




export default Header;