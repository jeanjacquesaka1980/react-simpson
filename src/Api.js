import React from 'react';
import './index.css';
import Button from './Button';

const Quote = props => {
    return <h4 className="quote">{props.result}</h4>
}

const Character = props => {
return <h5 className="author">{props.character}</h5>
}

const Image = props => {
    return <img className="image" src={props.src}/>
}



class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oneQuote: "",
            character: "",
            image: "",
        };
    }

    fetchData = () => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
            .then(response => { return response.json() })
            .then(data => {
                this.setState({
                    oneQuote: JSON.stringify(data[0].quote),
                    character: data[0].character,
                    image: data[0].image
                })
            })
            console.log(this.state.image);
    }


    render() {
        return (
            <div className="col-12 button-container">
                <Button onClick={this.fetchData} />
                <Quote result={this.state.oneQuote} />
                <Character character={this.state.character}/>
                <Image src={this.state.image} />
            </div>
        )
    }
};




export default Api;