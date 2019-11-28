import * as React from 'react';
import { Component } from 'react';
import { Author } from './author';
import { Router } from './router';

export class Book extends Component {
    render() {
        // const {
        //     name,
        //     genre,
        //     publishedOn,
        //     author
        // } = this.props.book;
        const {
            routeContext
        } = this.props;
        const state = this.props.store.getState();
        const publisherId = parseInt(Object.values(state.currentRoute[0])[0]);
        const bookId = parseInt(Object.values(state.currentRoute[1])[0]);
        const {
            name,
            genre,
            publishedOn,
            author
        } = state.publishers[publisherId].books[bookId];

        return (
            <div>
                <h2>Book Details</h2>
                <div>
                    <span>Book Name: </span>
                    <span>{name}</span>
                    <hr />
                    <span>Genre: </span>
                    <span>{genre}</span>
                    <hr />
                    <span>Published On: </span>
                    <span>{publishedOn}</span>
                    <hr />
                    {/* General Load
                    <Author author={author}></Author> */}
                    {/* Custom Router 1 - Passing all params to router
                    <Router route="author" store={this.props.store} routeParams={author}></Router> */}
                    <Router store={this.props.store} routeContext={routeContext}></Router>
                </div>
            </div>
        )
    }
}