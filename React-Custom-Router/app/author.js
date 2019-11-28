import * as React from 'react';

export class Author extends React.Component {
    render() {
        // const {
        //     name,
        //     dob
        // } = this.props.author;
        // const {
        //     name,
        //     dob
        // } = this.props.routeParams;
        const state = this.props.store.getState();
        const publisherId = parseInt(Object.values(state.currentRoute[0])[0]);
        const bookId = parseInt(Object.values(state.currentRoute[1])[0]);
        const {
            name,
            dob
        } = state.publishers[publisherId].books[bookId].author;
        return (
            <div>
                <h3>Author Details</h3>
                <div>
                    <span>Name: </span>
                    <span>{name}</span>
                    <hr />
                    <span>Date of Birth: </span>
                    <span>{dob}</span>
                </div>
            </div>
        );
    }
}