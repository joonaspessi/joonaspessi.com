import React from "react";
import Router from "react-router";

import BikeSetup from "./bikesetup.jsx";
import Contact from "./contact.jsx";
import Header from "./header.jsx";
import Sidebar from "./sidebar.jsx";
import Workouts from "./workouts.jsx";

import emitter from "./emitter.js";
import Gestures from "./gestures.js";
import Model from "./model.js"

let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

let model = new Model();
model.load().then(res => console.log(res));

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Sidebar collapse={true}/>
                <div className="app__content">
                    <Header/>
                    <div className="app__main">
                        <RouteHandler/>
                    </div>
                </div>
            </div>
        )
    }
}

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="workouts" handler={Workouts}/>
    <Route name="bikesetup" handler={BikeSetup}/>
    <Route name="contact" handler={Contact}/>
    <DefaultRoute handler={Workouts}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

// Init gestures
let gestures = new Gestures();