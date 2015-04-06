import React from "react";
import Router from "react-router";

let Link = Router.Link;

class Sidebar extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Sidebar;
