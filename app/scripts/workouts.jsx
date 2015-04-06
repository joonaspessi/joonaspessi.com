import React from "react";
import _ from "lodash";

class Workout extends React.Component {
    render() {
        return (
            <div className="workout">
                <div className="workout__header">
                    <div className="workout__name">Tour De France</div>
                    <div className="workout__information">
                        <div className="workout__distance">101km</div>
                        <div className="workout__moving-time">5:04:18</div>
                        <div className="workout__avg-speed">40.7km/h</div>
                    </div>
                </div>
                <div className="workout__suffer">PK</div>
            </div>
        );
    }
}

class Workouts extends React.Component {
    render() {
        let workoutList = _.map(_.range(100), () => <Workout/>);
        return (
            <div className="workouts">
                {workoutList}
            </div>
        )
    };
}

export default Workouts;
