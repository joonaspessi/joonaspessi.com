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
        emitter.on("sidebar::collapse", function() {
            this.setState({collapse: !this.state.collapse});
        }.bind(this));
    }

    render() {
        let showClassName = this.state.collapse ? "app__sidebar--collapse" : "";

        return (
            <div className={"app__sidebar " +showClassName}>
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
        );
    }
}

export default Sidebar;
