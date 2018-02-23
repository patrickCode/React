import React, {Component} from "react";
import ReactDOM from "react-dom";

class About extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <div>
                    This POC uses the following
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Webpack</li>
                        <li>Babel</li>
                        <li>ES 6</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;