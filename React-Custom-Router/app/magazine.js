import * as React from 'react';

export class Magazine extends React.Component {

    render() {
        const {
            routeContext
        } = this.props;
        const state = this.props.store.getState();
        const publisherId = parseInt(Object.values(state.currentRoute[0])[0]);
        const magazineId = parseInt(Object.values(state.currentRoute[1])[0]);
        const {
            name,
            type
        } = state.publishers[publisherId].magazines[magazineId];

        return (
            <div>
                <h2>Magazine Details</h2>
                <div>
                    <span>Magazine Name: </span>
                    <span>{name}</span>
                    <hr />
                    <span>Type: </span>
                    <span>{type}</span>
                    <hr />
                </div>
            </div>
        )
    }
}
