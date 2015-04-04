import React from "react";
import Router from "react-router";

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

class Home extends React.Component {
    render() {
        return (<div>Workouts</div>);
    }
}

class Workouts extends React.Component {
    render() {
        return (<div>Workouts Data mining and graphs</div>);
    }
}

class Contact extends React.Component {
    render() {
        return (<div>Contact</div>);
    }
}

class BikeSetup extends React.Component {
    render() {
        return (<div>My personal bike setup</div>);
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="app__header">
                <div className="header__icon fa fa-bars"></div>
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
                    <ul className="sidebar__navigation">
                        <li className="sidebar__item ">
                            <Link to="app"><div className="sidebar__item__icon fa fa-home"/>Workouts</Link>
                        </li>
                        <li className="sidebar__item">
                            <Link to="workouts"><div className="sidebar__item__icon fa fa-dashboard"/>Training Data</Link>
                        </li>
                        <li className="sidebar__item">
                            <Link to="bikesetup"><div className="sidebar__item__icon fa fa-bicycle"/>Bike Setup</Link>
                        </li>
                        <li className="sidebar__item">
                            <Link to="contact"><div className="sidebar__item__icon fa fa-diamond"/>Contact</Link>
                        </li>
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
    <Route name="bikesetup" handler={BikeSetup}/>
    <Route name="contact" handler={Contact}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
