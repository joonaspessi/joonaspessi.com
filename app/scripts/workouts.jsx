import React from "react";
import _ from "lodash";
import model from "./model.js";

function secondsToTimeFormat(timeInS) {
    var hours = Math.floor(timeInS/3600);
    var minutes =  Math.floor(timeInS/60) - hours * 60;
    var seconds = timeInS - minutes * 60;

    return `${hours}h ${minutes}m`;
}

class Workout extends React.Component {

    render() {
        return (
            <div className="workout">
                <div className="workout__header">
                    <div className="workout__name">{this.props.workout.name}</div>
                    <div className="workout__information">
                        <div className="workout__distance">{(this.props.workout.distance/1000).toFixed(1)}km</div>
                        <div className="workout__moving-time">{secondsToTimeFormat(this.props.workout.elapsed_time)}</div>
                        <div className="workout__avg-speed">{(this.props.workout.average_speed*3.6).toFixed(1)}km/h</div>
                    </div>
                </div>
                <div className="workout__suffer">{this.props.workout.average_heartrate}</div>
            </div>
        );
    }
}

class Workouts extends React.Component {
    constructor() {
        this.state = {
            workouts: []
        };
    }

    componentDidMount() {
        model.loadAsync().then(workouts => this.setState({workouts}));
    }

    render() {
        // let workoutList = _.map(_.range(100), () => <Workout/>);
        let workoutList = this.state.workouts.map(workout => <Workout key={workout.id} workout={workout}/>);
        return (
            <div className="workouts">
                {workoutList}
            </div>
        )
    };
}

export default Workouts;
