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
        return (<div className="main">Contact</div>);
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="app__header">
                <div className="header__icon">icon</div>
                <div className="header__name">JOONASPESSI</div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="app__sidebar">
                    <ul className="app__sidebar__navigation">
                      <li><Link to="app">Home</Link></li>
                      <li><Link to="workouts">Workouts</Link></li>
                      <li><Link to="bikes">Contact</Link></li>
                    </ul>
                </div>
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

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="workouts" handler={Workouts}/>
    <Route name="bikes" handler={Contact}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
