import React from "react";
import Router from "react-router";

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

class Home extends React.Component {
    render() {
        return (<div>Home</div>);
    }
}

class Workouts extends React.Component {
    render() {
        return (<div>Workouts</div>);
    }
}

class Contact extends React.Component {
    render() {
        return (<div>Contact</div>);
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                  <ul className="app__header__navigation">
                    <li><Link to="app">Home</Link></li>
                    <li><Link to="workouts">Workouts</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                  </ul>
                  Welcome to JoonasPessi.com
                </header>

                <div className="app__content">
                    <RouteHandler/>
                </div>
            </div>
        )
    }
}

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="workouts" handler={Workouts}/>
    <Route name="contact" handler={Contact}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
