import React from "react";
import Router from "react-router";
import Sidebar from "./sidebar.jsx";
import Workouts from "./workouts.jsx";
import emitter from "./emitter.js"

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

class Home extends React.Component {
    render() {
        return (<div>Workouts</div>);
    }
}

class Contact extends React.Component {
    render() {
        return (<div className="contact">Twitter @joonaspessi</div>);
    }
}

class BikeSetup extends React.Component {
    render() {
        return (
            <div className="bike-setup">
                <div className="bike-setup__info">
                    My personal bike setup
                </div>
                <div className="bike-setup__image">
                    <img src="images/joonaspessi.jpg" alt="joonas pessi"/>
                </div>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        let onHamburgerClick = this.onHamburgerClick.bind(this);
        return (
            <div className="app__header">
                <div className="header__icon fa fa-bars" onClick={onHamburgerClick}></div>
                <div className="header__name">JOONASPESSI</div>
                <a href="https://github.com/joonaspessi/joonaspessi.com" className="header__github fa fa-github"/>
            </div>
        );
    }

    onHamburgerClick() {
        emitter.emit("sidebar::collapse");
    }
}

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

var routes = (
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
