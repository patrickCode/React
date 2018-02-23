import React,{Component} from "react";
import ReactDOM from "react-dom";
import App from './components/app';
import routes from './routes';

/* - Loading a single component
import HomePage from './components/homePage';

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<HomePage />, wrapper) : false;
*/

// The below is needed for simple custom routing (not with react-router)
// function changeRoute() {
//     var currentRoute = window.location.hash.substr(1);
//     console.log("Route changed to "+currentRoute);
//     var wrapper = document.getElementById("app");
//     wrapper ? ReactDOM.render(<App route={currentRoute} />, wrapper) : false; //Pass the current route as a parameter
// }
// changeRoute();

// window.addEventListener('hashchange', changeRoute); //Triggered when URL chages from /#something to /#somethingelse
ReactDOM.render(routes, document.getElementById("app"));