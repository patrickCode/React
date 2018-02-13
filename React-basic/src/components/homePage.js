import React,{Component} from "react";
import ReactDOM from "react-dom";

class HomePage extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="jumbotron">
                <h1>React POC</h1>
                <p>POC for using React, Flux and Webpack</p>
            </div>
        );
    }
}

export default HomePage;