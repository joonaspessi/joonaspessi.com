import React from "react";
import emitter from "./emitter.js"

class Header extends React.Component {
    render() {
        let onHamburgerClick = this.onHamburgerClick.bind(this);
        return (
            <div className="app__header">
                <div className="header__icon" onClick={onHamburgerClick}>
                    <icon className="fa fa-bars"/>
                </div>
                <div className="header__name">JOONASPESSI</div>
                <a href="https://github.com/joonaspessi/joonaspessi.com" className="header__github fa fa-github"/>
            </div>
        );
    }

    onHamburgerClick() {
        emitter.emit("sidebar::toggle");
    }
}

export default Header;
