import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router';

class App extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App;