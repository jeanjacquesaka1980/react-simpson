import React from 'react';
import SideBar from './SideBar';
import Main from './Main';
// import Button from './Button';
import Api from './Api';
import './index.css';


const MainContainer = (props) => {
    return (
        <div className="container">
            <div className="row">
                <SideBar />
                <Main />
                <Api />
            </div>
        </div>
    )
}





export default MainContainer;