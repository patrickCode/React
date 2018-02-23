import React, {Component} from "react";
import ReactDOM from "react-dom";

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#books">Books</a></li>
                        <li><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;