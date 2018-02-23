import React from "react"
import {Route, Router, DefaultRoute, hashHistory} from 'react-router'
import App from './components/app'
import HomePage from './components/homePage';
import About from './components/about/about';
import Books from './components/books/books'

export default (
    <Router>
        <Route path="/" handler={App}>
            <DefaultRoute handler={HomePage} />
            <Route path="mybooks" handler={Books} /> 
            <Route path="about" handler={About} />
        </Route>
    </Router>
);