import React from "react";
import Router from "react-router";
import emitter from "./emitter.js"

let Link = Router.Link;

class Sidebar extends React.Component {
    constructor() {
        this.state = {
            collapse: true
        }
    }

    componentDidMount() {
        emitter.on("header::hamburgerClick", function() {
            this.setState({collapse: !this.state.collapse});
        }.bind(this));

        emitter.on("gesture::swipeRight", function() {
            this.setState({collapse: false});
        }.bind(this));

        emitter.on("gesture::swipeLeft", function() {
            this.setState({collapse: true});
        }.bind(this));
    }

    render() {
        let showClassName = this.state.collapse ? "app__sidebar--collapse" : "";
        let onNavClick = this.onNavClick.bind(this);
        return (
            <div className={"app__sidebar " +showClassName}>
                    <ul className="sidebar__navigation" onClick={onNavClick}>
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
        );
    }

    onNavClick() {
        emitter.emit("sidebar::close");
    }
}

export default Sidebar;
