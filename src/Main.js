import React from 'react';
import './index.css';
import Card from './Card';
import data from './data';


const Main = () => {
    return (
        <div className="main col-9">
            <div className="row">
            <Card
                src={data.homer.src}
                name={data.homer.name}
                birth={data.homer.birth}
            />
            <Card
                src={data.marge.src}
                name={data.marge.name}
                birth={data.marge.birth}
            />
            <Card
                src={data.bart.src}
                name={data.bart.name}
                birth={data.bart.birth}
            />
            <Card
                src={data.lisa.src}
                name={data.lisa.name}
                birth={data.lisa.birth}
            />
            </div>
        </div>
    )
}



export default Main;