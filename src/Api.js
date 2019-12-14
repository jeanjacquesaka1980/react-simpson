import React from 'react';
import './index.css';
import Button from './Button';

const Result = props => {
    return <h1>{props.result}</h1>
}

// const DEFAULT_QUERY = 'redux';

let newQuote;

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oneQuote: "",
        };
    }

    fetchData() {
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
            .then(response => { return response.json() })
            .then(data => {
                newQuote = JSON.stringify(data[0].quote)
                console.log(newQuote);
            })
    };

    handleClick = () => {
        this.setState({
            oneQuote: this.state.oneQuote === this.newQuote
        })
        console.log(this.oneQuote);
    }
    
    componentDidMount = () => {
        this.fetchData();
    }


    render() {
        return (
            <div className="button-container">
                <Button onClick={this.handleClick} />
                <Result result={this.state.oneQuote}/>
            </div>
        )
    }
};




export default Api;