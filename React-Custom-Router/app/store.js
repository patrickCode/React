import { createStore, combineReducers } from 'redux';
import { Publisher } from './publisher';
import { Author } from './author';
import { Book } from './book';
import { Magazine } from './magazine';

const bookStore = {
    publishers: [{
        name: 'Oxford',
        address: '16A/1 Elf Street Carmeliean, London',
        books: [{
            name: 'Oxford Dictionary',
            genre: 'Non-fiction',
            publishedOn: '5/12/1874',
            author: {
                name: 'Sir J.K. Gleeham',
                dob: '7/7/1842'
            }
        }, {
            name: 'Oxford Dictionary - 2nd Edition',
            genre: 'Non-fiction',
            publishedOn: '11/6/1952',
            author: {
                name: 'Donald Reeves',
                dob: '7/7/1896'
            }
        }]
    }, {
        name: 'Penguin',
        address: '347/17 Majestic & King Cross, NY, USA',
        books: [{
            name: 'The Potrait of a Spy',
            genre: 'Spy Thriller',
            publishedOn: '8/4/2016',
            author: {
                name: 'Daniel Silva',
                dob: '12/6/1966'
            }
        }, {
            name: 'The Snowman',
            genre: 'Crime Thriller',
            publishedOn: '2/2/2002',
            author: {
                name: 'Jo Nesbo',
                dob: '11/23/1968'
            }
        }],
        magazines: [{
            name: 'Enclycloedia',
            type: 'Annual'
        }]
    }],
    routes: {
        "publisher": Publisher,
        "author": Author,
        "book": Book,
        "magazine": Magazine
    },
    currentRoute: [{
        'publisher': '0'
    }, {
        'book': '0'
    }, {
        'author': ''
    }]
}

const publishers = (state = bookStore.publishers, action) => {
    return state;
}

const routes = (state = bookStore.routes, action) => state;

const currentRoute = (state = bookStore.currentRoute, action) => {
    switch (action.type) {
        case 'CHANGE_ROUTE': {
            // const routes = ['publisher', 'book', 'author', 'magazine'];
            const routes = Object.keys(bookStore.routes);
            const newRoute = action.payload;
            const splittedRoutes = newRoute.split("/");
            let newRouteObj = [];
            let routeObj = {};
            let lastRoute = null;
            splittedRoutes.forEach(element => {
                if (routes.find(r => r === element)) {
                    if (lastRoute !== null) {
                        newRouteObj.push(routeObj);
                        routeObj = {};
                    }
                    lastRoute = element;
                    routeObj[element] = '';
                } else {
                    routeObj[lastRoute] = element
                    newRouteObj.push(routeObj);
                    routeObj = {};
                    lastRoute = null;
                }
            });
            if (lastRoute !== null)
                newRouteObj.push(routeObj);

            console.log(newRouteObj);
            return newRouteObj;
        }
    }
    return state;
}

export const store = createStore(combineReducers({ publishers, routes, currentRoute }));