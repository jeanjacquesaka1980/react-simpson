import React from 'react';
import SideBar from './SideBar';
import Main from './Main';
import './index.css';


const MainContainer = () => {
    return (
        <div className="container">
            <div className="row">
                <SideBar />
                <Main />
            </div>
        </div>
    )
}





export default MainContainer;