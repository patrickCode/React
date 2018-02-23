import React, {Component} from "react";
import ReactDOM from "react-dom";
import HomePage from './homePage';
import About from './about/about';
import MyBooksList from './books/myBooksList'
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
            case 'mybooks': CurrentComponent = MyBooksList;
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