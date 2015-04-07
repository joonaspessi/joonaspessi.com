import React from "react";

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

export default Header;
