import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Publisher } from './publisher';
import { store } from './store';
import { Provider } from 'react-redux';
import { Router } from './router';

class Root extends React.Component {

    constructor() {
        super();
        // store.subscribe(() => {
        //     console.log("Called");
        //     this.render()
        // });
    }

    render() {
        return (
            <div>
                <h1>Book Store</h1>
                <hr />
                <Router store={store}></Router>
                {/* <Publisher store={store}></Publisher> */}
                <hr />
                <h1>Routes</h1>
                <button onClick={() => store.dispatch({ type: 'CHANGE_ROUTE', payload: 'publisher/0/book/0/author' })}>publisher/0/books/0/author</button>
                <button onClick={() => store.dispatch({ type: 'CHANGE_ROUTE', payload: 'publisher/0/book/1/author' })}>publisher/0/books/1/author</button>
                <button onClick={() => store.dispatch({ type: 'CHANGE_ROUTE', payload: 'publisher/1/book/0/author' })}>publisher/0/books/1/author</button>
                <button onClick={() => store.dispatch({ type: 'CHANGE_ROUTE', payload: 'publisher/1/book/1/author' })}>publisher/0/books/1/author</button>
                <button onClick={() => store.dispatch({ type: 'CHANGE_ROUTE', payload: 'publisher/1/book/1' })}>publisher/0/books/1</button>
                <button onClick={() => store.dispatch({ type: 'CHANGE_ROUTE', payload: 'publisher/1/magazine/0' })}>publisher/1/magazine/0</button>
            </div>
        )
    }
}

const render = () => {
    // ReactDOM.render(<Root />, document.getElementById("bookstore"));
    ReactDOM.render(

        <Root />,
        
        document.getElementById("bookstore"));
}

render();

store.subscribe(() => render());