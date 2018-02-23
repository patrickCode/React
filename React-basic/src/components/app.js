import React, {Component} from "react";
import ReactDOM from "react-dom";
import HomePage from './homePage';
import About from './about/about';
import Books from './books/books'
import Header from './common/header';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        console.log("Re-routing to "+this.props.route);
        var CurrentComponent;

        switch (this.props.route) {
            case 'about': CurrentComponent = About;
                break;
            case 'books': CurrentComponent = Books;
                break;
            default: CurrentComponent = HomePage;
        }
        return (
            <div>
                <Header />
                <CurrentComponent />
            </div>
        );
    }
}

export default App;