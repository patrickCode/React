import * as React from 'react';
import { Author } from './author';
import { Book } from './book';

export class Router extends React.Component {
    render() {
        // let {
        //     route,
        //     routeParams
        // } = this.props;

        // if (this.props.store !== undefined && this.props.store !== null) {
        //     routes = this.props.store.getState().routes;
        // }

        const {
            routes,
            currentRoute
        } = this.props.store.getState();
        let {
            routeContext
        } = this.props;

        if (routeContext === undefined || routeContext === null) {
            routeContext = currentRoute
        }

        if (routeContext === undefined || routeContext === null || routeContext.length === 0)
            return (<div></div>);

        let currentContext = routeContext[0];
        let route = Object.keys(currentContext)[0];
        let routeParams = currentContext[route];
        let newRouteContext = routeContext.slice(1);

        if (routes !== undefined && routes !== null) {
            const routedComponent = routes[route];
            if (routedComponent !== undefined && routedComponent !== null)
                return (
                    React.createElement(routedComponent, { store: this.props.store, routeContext: newRouteContext, currentContext, routeParams })
                )
        }

        return (<div></div>);


        // if (route === 'author')
        //     return (<Author routeParams={routeParams}></Author>)
        // else if (route === 'book')
        //     return (<Book routeParams={routeParams}></Book>)
        // else
        //     return (<div></div>)
    }
}