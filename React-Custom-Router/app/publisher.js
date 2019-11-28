import * as React from 'react';
import { Component } from 'react';
import { Book } from './book';
import { Router } from './router';

export class Publisher extends Component {
    render() {
        const {
            routeParams,
            routeContext
        } = this.props;
        const publisherId = parseInt(routeParams);
        const {
            name,
            address,
            books
        } = this.props.store.getState().publishers[publisherId];

        console.log(this.props);

        return(
            <div>
                <h1>Publisher Details</h1>
                <div>
                    <span>Publisher Name: </span>
                    <span>{name}</span>
                    <hr/>
                    <span>Address: </span>
                    <span>{address}</span>
                    <hr/>
                    {/* General Load
                    <Book book={books[0]}></Book> */}
                    {/* Custom Router 1 - Passing all params to router
                    <Router store={this.props.store} route="book" routeParams={books[0]}></Router> */}
                    {/* Custom Router 2 - Passing context to router */}
                    <Router store={this.props.store} routeContext={routeContext}></Router>
                </div>
            </div>
        )
    }
}