import React from "react";

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

export default BikeSetup;
